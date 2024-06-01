[@ethereumjs/client](../README.md) / ConfigOptions

# Interface: ConfigOptions

## Table of contents

### Properties

- [accountCache](ConfigOptions.md#accountcache)
- [accounts](ConfigOptions.md#accounts)
- [bootnodes](ConfigOptions.md#bootnodes)
- [codeCache](ConfigOptions.md#codecache)
- [common](ConfigOptions.md#common)
- [datadir](ConfigOptions.md#datadir)
- [debugCode](ConfigOptions.md#debugcode)
- [discDns](ConfigOptions.md#discdns)
- [discV4](ConfigOptions.md#discv4)
- [dnsAddr](ConfigOptions.md#dnsaddr)
- [dnsNetworks](ConfigOptions.md#dnsnetworks)
- [enableSnapSync](ConfigOptions.md#enablesnapsync)
- [engineNewpayloadMaxExecute](ConfigOptions.md#enginenewpayloadmaxexecute)
- [engineNewpayloadMaxTxsExecute](ConfigOptions.md#enginenewpayloadmaxtxsexecute)
- [engineParentLookupMaxDepth](ConfigOptions.md#engineparentlookupmaxdepth)
- [execution](ConfigOptions.md#execution)
- [extIP](ConfigOptions.md#extip)

- [isSingleNode](ConfigOptions.md#issinglenode)
- [key](ConfigOptions.md#key)
- [lightserv](ConfigOptions.md#lightserv)
- [logger](ConfigOptions.md#logger)
- [maxAccountRange](ConfigOptions.md#maxaccountrange)
- [maxFetcherJobs](ConfigOptions.md#maxfetcherjobs)
- [maxFetcherRequests](ConfigOptions.md#maxfetcherrequests)
- [maxInvalidBlocksErrorCache](ConfigOptions.md#maxinvalidblockserrorcache)
- [maxPeers](ConfigOptions.md#maxpeers)
- [maxPerRequest](ConfigOptions.md#maxperrequest)
- [maxRangeBytes](ConfigOptions.md#maxrangebytes)
- [maxStorageRange](ConfigOptions.md#maxstoragerange)
- [minPeers](ConfigOptions.md#minpeers)
- [mine](ConfigOptions.md#mine)
- [minerCoinbase](ConfigOptions.md#minercoinbase)
- [multiaddrs](ConfigOptions.md#multiaddrs)
- [numBlocksPerIteration](ConfigOptions.md#numblocksperiteration)
- [port](ConfigOptions.md#port)
- [prefixStorageTrieKeys](ConfigOptions.md#prefixstoragetriekeys)

- [pruneEngineCache](ConfigOptions.md#pruneenginecache)
- [safeReorgDistance](ConfigOptions.md#safereorgdistance)
- [savePreimages](ConfigOptions.md#savepreimages)
- [saveReceipts](ConfigOptions.md#savereceipts)
- [server](ConfigOptions.md#server)
- [skeletonFillCanonicalBackStep](ConfigOptions.md#skeletonfillcanonicalbackstep)
- [skeletonSubchainMergeMinimum](ConfigOptions.md#skeletonsubchainmergeminimum)
- [snapAvailabilityDepth](ConfigOptions.md#snapavailabilitydepth)
- [snapTransitionSafeDepth](ConfigOptions.md#snaptransitionsafedepth)

- [statelessVerkle](ConfigOptions.md#statelessverkle)
- [storageCache](ConfigOptions.md#storagecache)
- [syncedStateRemovalPeriod](ConfigOptions.md#syncedstateremovalperiod)
- [syncmode](ConfigOptions.md#syncmode)
- [trieCache](ConfigOptions.md#triecache)
- [txLookupLimit](ConfigOptions.md#txlookuplimit)
- [useStringValueTrieDB](ConfigOptions.md#usestringvaluetriedb)
- [vm](ConfigOptions.md#vm)
- [vmProfileBlocks](ConfigOptions.md#vmprofileblocks)
- [vmProfileTxs](ConfigOptions.md#vmprofiletxs)

## Properties

### accountCache

• `Optional` **accountCache**: `number`

Size for the account cache (max number of accounts)

#### Defined in



___

### accounts

• `Optional` **accounts**: [address: Address, privKey: Uint8Array][]

Unlocked accounts of form [address, privateKey]
Currently only the first account is used to seal mined PoA blocks

Default: []

#### Defined in



___

### bootnodes

• `Optional` **bootnodes**: `Multiaddr`[]

Network bootnodes
(e.g. abc@18.138.108.67 or /ip4/127.0.0.1/tcp/50505/p2p/QmABC)

#### Defined in



___

### codeCache

• `Optional` **codeCache**: `number`

Size for the code cache (max number of contracts)

#### Defined in



___

### common

• `Optional` **common**: `Common`

Specify the chain by providing a Common instance,
the common instance will not be modified by client

Default: 'mainnet' Common

#### Defined in



___

### datadir

• `Optional` **datadir**: `string`

Root data directory for the blockchain

#### Defined in



___

### debugCode

• `Optional` **debugCode**: `boolean`

Generate code for local debugging, currently providing a
code snippet which can be used to run blocks on the
EthereumJS VM on execution errors

(meant to be used internally for the most part)

#### Defined in



___

### discDns

• `Optional` **discDns**: `boolean`

Query EIP-1459 DNS TXT records for peer discovery

Default: `true` for testnets, false for mainnet

#### Defined in



___

### discV4

• `Optional` **discV4**: `boolean`

Use v4 ("findneighbour" node requests) for peer discovery

Default: `false` for testnets, true for mainnet

#### Defined in



___

### dnsAddr

• `Optional` **dnsAddr**: `string`

DNS server to query DNS TXT records from for peer discovery

Default `8.8.8.8` (Google)

#### Defined in



___

### dnsNetworks

• `Optional` **dnsNetworks**: `string`[]

EIP-1459 ENR Tree urls to query via DNS for peer discovery

#### Defined in



___

### enableSnapSync

• `Optional` **enableSnapSync**: `boolean`

Whether to enable and run snapSync, currently experimental

Default: false

#### Defined in



___

### engineNewpayloadMaxExecute

• `Optional` **engineNewpayloadMaxExecute**: `number`

Max blocks including unexecuted parents to be executed in engine's newPayload

#### Defined in



___

### engineNewpayloadMaxTxsExecute

• `Optional` **engineNewpayloadMaxTxsExecute**: `number`

Limit max transactions per block to execute in engine's newPayload for responsive engine api

#### Defined in



___

### engineParentLookupMaxDepth

• `Optional` **engineParentLookupMaxDepth**: `number`

Max depth for parent lookups in engine's newPayload and forkchoiceUpdated

#### Defined in



___

### execution

• `Optional` **execution**: `boolean`

Start continuous VM execution (pre-Merge setting)

#### Defined in



___

### extIP

• `Optional` **extIP**: `string`

RLPx external IP

#### Defined in


Default: `false`

#### Defined in



___

### key

• `Optional` **key**: `Uint8Array`

Private key for the client.
Use return value of [getClientKey](../classes/Config.md#getclientkey).
If left blank, a random key will be generated and used.

#### Defined in



___

### lightserv

• `Optional` **lightserv**: `boolean`

Serve light peer requests

Default: `false`

#### Defined in



___

### logger

• `Optional` **logger**: `Logger`

A custom winston logger can be provided
if setting logging verbosity is not sufficient

Default: Logger with loglevel 'info'

#### Defined in



___

### maxAccountRange

• `Optional` **maxAccountRange**: `bigint`

#### Defined in



___

### maxFetcherJobs

• `Optional` **maxFetcherJobs**: `number`

Max jobs to be enqueued in the fetcher at any given time

Default: `100`

#### Defined in



___

### maxFetcherRequests

• `Optional` **maxFetcherRequests**: `number`

Max outgoing multi-peer requests by the fetcher at any given time

#### Defined in



___

### maxInvalidBlocksErrorCache

• `Optional` **maxInvalidBlocksErrorCache**: `number`

Cache size of invalid block hashes and their errors

#### Defined in



___

### maxPeers

• `Optional` **maxPeers**: `number`

Maximum peers allowed

Default: `25`

#### Defined in



___

### maxPerRequest

• `Optional` **maxPerRequest**: `number`

Max items per block or header request

Default: `100`

#### Defined in



___

### maxRangeBytes

• `Optional` **maxRangeBytes**: `number`

#### Defined in



___

### maxStorageRange

• `Optional` **maxStorageRange**: `bigint`

#### Defined in



___

### minPeers

• `Optional` **minPeers**: `number`

Number of peers needed before syncing

Default: `1`

#### Defined in



___

### mine

• `Optional` **mine**: `boolean`

Enable mining

Default: `false`

#### Defined in



___

### minerCoinbase

• `Optional` **minerCoinbase**: `Address`

Address for mining rewards (etherbase)
If not provided, defaults to the primary account.

#### Defined in



___

### multiaddrs

• `Optional` **multiaddrs**: `Multiaddr`[]

Network multiaddrs for libp2p
(e.g. /ip4/127.0.0.1/tcp/50505/p2p/QmABC)

#### Defined in



___

### numBlocksPerIteration

• `Optional` **numBlocksPerIteration**: `number`

Number of blocks to execute in batch mode and logged to console

#### Defined in



___

### port

• `Optional` **port**: `number`

RLPx listening port

Default: `30303`

#### Defined in



___

### prefixStorageTrieKeys

• `Optional` **prefixStorageTrieKeys**: `boolean`

A temporary option to offer backward compatibility with already-synced databases that are
using non-prefixed keys for storage tries

Default: true

#### Defined in



___

### pruneEngineCache

• `Optional` **pruneEngineCache**: `boolean`

#### Defined in



___

### safeReorgDistance

• `Optional` **safeReorgDistance**: `number`

If there is a reorg, this is a safe distance from which
to try to refetch and refeed the blocks.

#### Defined in



___

### savePreimages

• `Optional` **savePreimages**: `boolean`

Save account keys preimages in the meta db (default: false)

#### Defined in



___

### saveReceipts

• `Optional` **saveReceipts**: `boolean`

Save tx receipts and logs in the meta db (default: false)

#### Defined in



___

### server

• `Optional` **server**: `RlpxServer`

Transport servers (RLPx)
Only used for testing purposes

#### Defined in



___

### skeletonFillCanonicalBackStep

• `Optional` **skeletonFillCanonicalBackStep**: `number`

If there is a skeleton fillCanonicalChain block lookup errors
because of closing chain conditions, this allows skeleton
to backstep and fill again using reverse block fetcher.

#### Defined in



___

### skeletonSubchainMergeMinimum

• `Optional` **skeletonSubchainMergeMinimum**: `number`

If skeleton subchains can be merged, what is the minimum tail
gain, as subchain merge will lead to the ReverseBlockFetcher
reset

#### Defined in



___

### snapAvailabilityDepth

• `Optional` **snapAvailabilityDepth**: `bigint`

#### Defined in



___

### snapTransitionSafeDepth

• `Optional` **snapTransitionSafeDepth**: `bigint`

#### Defined in



___

### statelessVerkle

• `Optional` **statelessVerkle**: `boolean`

Enables stateless verkle block execution (default: false)

#### Defined in



___

### storageCache

• `Optional` **storageCache**: `number`

Size for the storage cache (max number of contracts)

#### Defined in



___

### syncedStateRemovalPeriod

• `Optional` **syncedStateRemovalPeriod**: `number`

The time after which synced state is downgraded to unsynced

#### Defined in



___

### syncmode

• `Optional` **syncmode**: [`SyncMode`](../enums/SyncMode.md)

Synchronization mode ('full', 'light', 'none')

Default: 'full'

#### Defined in



___

### trieCache

Size for the trie cache (max number of trie nodes)

#### Defined in



___

### txLookupLimit

• `Optional` **txLookupLimit**: `number`

Number of recent blocks to maintain transactions index for
(default = 2350000 = about one year, 0 = entire chain)

#### Defined in



___

### useStringValueTrieDB

• `Optional` **useStringValueTrieDB**: `boolean`

A temporary option to offer backward compatibility with already-synced databases that stores
trie items as `string`, instead of the more performant `Uint8Array`

#### Defined in



___

### vm

• `Optional` **vm**: `VM`

Provide a custom VM instance to process blocks

Default: VM instance created by client

#### Defined in



___

### vmProfileBlocks

• `Optional` **vmProfileBlocks**: `boolean`

Whether to profile VM blocks

#### Defined in



___

### vmProfileTxs

• `Optional` **vmProfileTxs**: `boolean`

Whether to profile VM txs

#### Defined in


