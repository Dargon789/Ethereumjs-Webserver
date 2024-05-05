import { EventEmitter } from 'events'

import type { SyncMode } from '.'
import type { Peer } from './net/peer'
import type { Server } from './net/server'
import type { Block, BlockHeader } from '@ethereumjs/block'
import type { DefaultStateManager } from '@ethereumjs/statemanager'
import type { Address } from '@ethereumjs/util'
import type { Multiaddr } from 'multiaddr'

/**
 * Types for the central event bus, emitted
 * by different components of the client.
 */
export enum Event {
  CHAIN_UPDATED = 'blockchain:chain:updated',
  CLIENT_SHUTDOWN = 'client:shutdown',
  SYNC_EXECUTION_VM_ERROR = 'sync:execution:vm:error',
  SYNC_FETCHED_BLOCKS = 'sync:fetcher:fetched_blocks',
  SYNC_FETCHED_HEADERS = 'sync:fetcher:fetched_headers',
  SYNC_SYNCHRONIZED = 'sync:synchronized',
  SYNC_ERROR = 'sync:error',
  SYNC_FETCHER_ERROR = 'sync:fetcher:error',
  SYNC_SNAPSYNC_COMPLETE = 'sync:snapsync:complete',
  PEER_CONNECTED = 'peer:connected',
  PEER_DISCONNECTED = 'peer:disconnected',
  PEER_ERROR = 'peer:error',
  SERVER_LISTENING = 'server:listening',
  SERVER_ERROR = 'server:error',
  POOL_PEER_ADDED = 'pool:peer:added',
  POOL_PEER_REMOVED = 'pool:peer:removed',
  POOL_PEER_BANNED = 'pool:peer:banned',
  PROTOCOL_ERROR = 'protocol:error',
  PROTOCOL_MESSAGE = 'protocol:message',
}
export interface EventParams {
  [Event.CHAIN_UPDATED]: []
  [Event.CLIENT_SHUTDOWN]: []
  [Event.SYNC_EXECUTION_VM_ERROR]: [vmError: Error]
  [Event.SYNC_FETCHED_BLOCKS]: [blocks: Block[]]
  [Event.SYNC_FETCHED_HEADERS]: [headers: BlockHeader[]]
  [Event.SYNC_SYNCHRONIZED]: [chainHeight: bigint]
  [Event.SYNC_SNAPSYNC_COMPLETE]: [stateRoot: Uint8Array, stateManager: DefaultStateManager]
  [Event.SYNC_ERROR]: [syncError: Error]
  [Event.SYNC_FETCHER_ERROR]: [fetchError: Error, task: any, peer: Peer | null | undefined]
  [Event.PEER_CONNECTED]: [connectedPeer: Peer]
  [Event.PEER_DISCONNECTED]: [disconnectedPeer: Peer]
  [Event.PEER_ERROR]: [error: Error, peerCausingError: Peer]
  [Event.SERVER_LISTENING]: [{ transport: string; url: string }]
  [Event.SERVER_ERROR]: [serverError: Error, serverCausingError: Server]
  [Event.POOL_PEER_ADDED]: [addedPeer: Peer]
  [Event.POOL_PEER_REMOVED]: [removedPeer: Peer]
  [Event.POOL_PEER_BANNED]: [bannedPeer: Peer]
  [Event.PROTOCOL_ERROR]: [boundProtocolError: Error, peerCausingError: Peer]
  [Event.PROTOCOL_MESSAGE]: [messageDetails: any, protocolName: string, sendingPeer: Peer]
}

export declare interface EventBus<T extends Event> {
  emit(event: T, ...args: EventParams[T]): boolean
  on(event: T, listener: (...args: EventParams[T]) => void): this
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class EventBus<T extends Event> extends EventEmitter {}
export type EventBusType = EventBus<Event.CHAIN_UPDATED> &
  EventBus<Event.CLIENT_SHUTDOWN> &
  EventBus<Event.SYNC_EXECUTION_VM_ERROR> &
  EventBus<Event.SYNC_FETCHED_BLOCKS> &
  EventBus<Event.SYNC_FETCHED_HEADERS> &
  EventBus<Event.SYNC_SYNCHRONIZED> &
  EventBus<Event.SYNC_SNAPSYNC_COMPLETE> &
  EventBus<Event.SYNC_FETCHER_ERROR> &
  EventBus<Event.PEER_CONNECTED> &
  EventBus<Event.PEER_DISCONNECTED> &
  EventBus<Event.PEER_ERROR> &
  EventBus<Event.SERVER_LISTENING> &
  EventBus<Event.SERVER_ERROR> &
  EventBus<Event.SYNC_ERROR> &
  EventBus<Event.POOL_PEER_ADDED> &
  EventBus<Event.POOL_PEER_REMOVED> &
  EventBus<Event.POOL_PEER_BANNED> &
  EventBus<Event.PROTOCOL_ERROR> &
  EventBus<Event.PROTOCOL_MESSAGE>

/**
 * Like types
 */
export type Key = Uint8Array
export type KeyLike = string | Key

export type MultiaddrLike = string | string[] | Multiaddr | Multiaddr[]

/**
 * DNS
 */
export type DnsNetwork = string

export interface ClientOpts {
  network?: string
  networkId?: number
  sync?: SyncMode
  lightServe?: boolean
  dataDir?: string
  customChain?: string
  customGenesisState?: string
  gethGenesis?: string
  trustedSetup?: string
  mergeForkIdPostMerge?: boolean
  bootnodes?: string | string[]
  port?: number
  extIP?: string
  multiaddrs?: string | string[]
  rpc?: boolean
  rpcPort?: number
  rpcAddr?: string
  ws?: boolean
  wsPort?: number
  wsAddr?: string
  rpcEngine?: boolean
  rpcEnginePort?: number
  rpcEngineAddr?: string
  wsEnginePort?: number
  wsEngineAddr?: string
  rpcEngineAuth?: boolean
  jwtSecret?: string
  helpRpc?: boolean
  logLevel?: string
  logFile?: boolean | string
  logLevelFile?: string
  logRotate?: boolean
  logMaxFiles?: number
  rpcDebug?: string
  rpcDebugVerbose?: string
  rpcCors?: string
  maxPerRequest?: number
  maxFetcherJobs?: number
  minPeers?: number
  maxPeers?: number
  dnsAddr?: string
  execution?: boolean
  numBlocksPerIteration?: number
  accountCache?: number
  storageCache?: number
  codeCache?: number
  trieCache?: number
  dnsNetworks?: string[]
  executeBlocks?: string
  debugCode?: boolean
  discDns?: boolean
  discV4?: boolean
  mine?: boolean
  unlock?: string
  dev?: boolean | string
  minerCoinbase?: Address
  saveReceipts?: boolean
  prefixStorageTrieKeys?: boolean
  snap?: boolean
  useStringValueTrieDB?: boolean
  txLookupLimit?: number
  startBlock?: number
  isSingleNode?: boolean
  vmProfileBlocks?: boolean
  vmProfileTxs?: boolean
  loadBlocksFromRlp?: string
  pruneEngineCache?: boolean
  savePreimages?: boolean
  verkleGenesisStateRoot?: Uint8Array
  statelessVerkle?: boolean
  engineNewpayloadMaxExecute?: number
  skipEngineExec?: boolean
  useJsCrypto?: boolean
}
