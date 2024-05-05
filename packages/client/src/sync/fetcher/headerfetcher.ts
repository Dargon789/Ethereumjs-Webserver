import { Event } from '../../types'

import { BlockFetcherBase } from './blockfetcherbase'

import type { Peer } from '../../net/peer'
import type { FlowControl } from '../../net/protocol'
import type { BlockFetcherOptions, JobTask } from './blockfetcherbase'
import type { Job } from './types'
import type { BlockHeader } from '@ethereumjs/block'

export interface HeaderFetcherOptions extends BlockFetcherOptions {
  /* Flow control manager */
  flow: FlowControl
}

type BlockHeaderResult = { reqId: bigint; bv: bigint; headers: BlockHeader[] }

/**
 * Implements an les/1 based header fetcher
 * @memberof module:sync/fetcher
 */
export class HeaderFetcher extends BlockFetcherBase<BlockHeaderResult, BlockHeader> {
  private flow: FlowControl

  /**
   * Create new header fetcher
   */
  constructor(options: any) {
    super(options)

    this.flow = options.flow
  }

  /**
   * Requests block headers for the given task
   * @param job
   */
  async request(job: Job<JobTask, BlockHeaderResult, BlockHeader>) {
    const { task, peer, partialResult } = job
    if (this.flow.maxRequestCount(peer!, 'GetBlockHeaders') < this.config.maxPerRequest) {
      // we reached our request limit. try with a different peer.
      return
    }
    let { first, count } = task
    if (partialResult) {
      first = first + BigInt(partialResult.length)
      count -= partialResult.length
    }
    const response = await peer!.les!.getBlockHeaders({
      block: first,
      max: count,
      reverse: this.reverse,
    })
    return response
  }

  /**
   * Process fetch result
   * @param job fetch job
   * @param result fetch result
   * @returns results of processing job or undefined if job not finished
   */
  process(job: Job<JobTask, BlockHeaderResult, BlockHeader>, result: BlockHeaderResult) {
    this.flow.handleReply(job.peer!, Number(result.bv))
    let { headers } = result
    headers = (job.partialResult ?? []).concat(headers)
    job.partialResult = undefined
    if (headers.length === job.task.count) {
      return headers
    } else if (headers.length > 0 && headers.length < job.task.count) {
      // Adopt the start block/header number from the remaining jobs
      // if the number of the results provided is lower than the expected count
      job.partialResult = headers
    }
    return
  }

  /**
   * Store fetch result. Resolves once store operation is complete.
   * @param headers fetch result
   */
  async store(headers: BlockHeader[]) {
    try {
      const num = await this.chain.putHeaders(headers)
      this.debug(
        `Fetcher results stored in blockchain (headers num=${headers.length} first=${
          headers[0]?.number
        } last=${headers[headers.length - 1]?.number})`
      )
      this.config.events.emit(Event.SYNC_FETCHED_HEADERS, headers.slice(0, num))
    } catch (e: any) {
      this.debug(
        `Error storing fetcher results in blockchain (headers num=${headers.length} first=${
          headers[0]?.number
        } last=${headers[headers.length - 1]?.number}): ${e}`
      )
      throw e
    }
  }

  /**
   * Returns an idle peer that can process a next job.
   */
  peer(): Peer | undefined {
    return this.pool.idle((peer) => peer.les && peer.les.status.serveHeaders)
  }
}
