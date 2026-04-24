[@ethereumjs/client](../README.md) / Config

# Class: Config

## Table of contents

### Constructors

- [constructor](Config.md#constructor)

### Properties

- [accountCache](Config.md#accountcache)
- [accounts](Config.md#accounts)
- [bootnodes](Config.md#bootnodes)
- [chainCommon](Config.md#chaincommon)
- [codeCache](Config.md#codecache)
- [datadir](Config.md#datadir)
- [debugCode](Config.md#debugcode)
- [discDns](Config.md#discdns)
- [discV4](Config.md#discv4)
- [dnsAddr](Config.md#dnsaddr)
- [enableSnapSync](Config.md#enablesnapsync)
- [engineNewpayloadMaxExecute](Config.md#enginenewpayloadmaxexecute)
- [engineNewpayloadMaxTxsExecute](Config.md#enginenewpayloadmaxtxsexecute)
- [engineParentLookupMaxDepth](Config.md#engineparentlookupmaxdepth)
- [events](Config.md#events)
- [execCommon](Config.md#execcommon)
- [execution](Config.md#execution)
- [extIP](Config.md#extip)

- [isSingleNode](Config.md#issinglenode)
- [key](Config.md#key)
- [lastSyncDate](Config.md#lastsyncdate)
- [lastsyncronized](Config.md#lastsyncronized)
- [lightserv](Config.md#lightserv)
- [logger](Config.md#logger)
- [maxAccountRange](Config.md#maxaccountrange)
- [maxFetcherJobs](Config.md#maxfetcherjobs)
- [maxFetcherRequests](Config.md#maxfetcherrequests)
- [maxInvalidBlocksErrorCache](Config.md#maxinvalidblockserrorcache)
- [maxPeers](Config.md#maxpeers)
- [maxPerRequest](Config.md#maxperrequest)
- [maxRangeBytes](Config.md#maxrangebytes)
- [maxStorageRange](Config.md#maxstoragerange)

- [minPeers](Config.md#minpeers)
- [mine](Config.md#mine)
- [minerCoinbase](Config.md#minercoinbase)
- [multiaddrs](Config.md#multiaddrs)
- [numBlocksPerIteration](Config.md#numblocksperiteration)
- [port](Config.md#port)
- [prefixStorageTrieKeys](Config.md#prefixstoragetriekeys)
- [pruneEngineCache](Config.md#pruneenginecache)
- [safeReorgDistance](Config.md#safereorgdistance)
- [savePreimages](Config.md#savepreimages)
- [saveReceipts](Config.md#savereceipts)
- [server](Config.md#server)
- [shutdown](Config.md#shutdown)
- [skeletonFillCanonicalBackStep](Config.md#skeletonfillcanonicalbackstep)
- [skeletonSubchainMergeMinimum](Config.md#skeletonsubchainmergeminimum)
- [snapAvailabilityDepth](Config.md#snapavailabilitydepth)
- [snapTransitionSafeDepth](Config.md#snaptransitionsafedepth)

- [statelessVerkle](Config.md#statelessverkle)
- [storageCache](Config.md#storagecache)
- [syncTargetHeight](Config.md#synctargetheight)
- [syncedStateRemovalPeriod](Config.md#syncedstateremovalperiod)
- [synchronized](Config.md#synchronized)
- [syncmode](Config.md#syncmode)
- [trieCache](Config.md#triecache)
- [txLookupLimit](Config.md#txlookuplimit)
- [useStringValueTrieDB](Config.md#usestringvaluetriedb)
- [vm](Config.md#vm)
- [vmProfilerOpts](Config.md#vmprofileropts)
- [ACCOUNT\_CACHE](Config.md#account_cache)
- [CHAIN\_DEFAULT](Config.md#chain_default)
- [CODE\_CACHE](Config.md#code_cache)
- [DATADIR\_DEFAULT](Config.md#datadir_default)
- [DEBUGCODE\_DEFAULT](Config.md#debugcode_default)
- [DNSADDR\_DEFAULT](Config.md#dnsaddr_default)
- [ENGINE\_NEWPAYLOAD\_MAX\_EXECUTE](Config.md#engine_newpayload_max_execute)
- [ENGINE\_NEWPAYLOAD\_MAX\_TXS\_EXECUTE](Config.md#engine_newpayload_max_txs_execute)
- [ENGINE\_PARENTLOOKUP\_MAX\_DEPTH](Config.md#engine_parentlookup_max_depth)
- [EXECUTION](Config.md#execution-1)
- [LIGHTSERV\_DEFAULT](Config.md#lightserv_default)
- [MAXFETCHERJOBS\_DEFAULT](Config.md#maxfetcherjobs_default)
- [MAXFETCHERREQUESTS\_DEFAULT](Config.md#maxfetcherrequests_default)
- [MAXPEERS\_DEFAULT](Config.md#maxpeers_default)
- [MAXPERREQUEST\_DEFAULT](Config.md#maxperrequest_default)
- [MAX\_ACCOUNT\_RANGE](Config.md#max_account_range)
- [MAX\_INVALID\_BLOCKS\_ERROR\_CACHE](Config.md#max_invalid_blocks_error_cache)
- [MAX\_RANGE\_BYTES](Config.md#max_range_bytes)
- [MAX\_STORAGE\_RANGE](Config.md#max_storage_range)
- [MINPEERS\_DEFAULT](Config.md#minpeers_default)
- [NUM\_BLOCKS\_PER\_ITERATION](Config.md#num_blocks_per_iteration)
- [PORT\_DEFAULT](Config.md#port_default)
- [PRUNE\_ENGINE\_CACHE](Config.md#prune_engine_cache)
- [SAFE\_REORG\_DISTANCE](Config.md#safe_reorg_distance)
- [SKELETON\_FILL\_CANONICAL\_BACKSTEP](Config.md#skeleton_fill_canonical_backstep)
- [SKELETON\_SUBCHAIN\_MERGE\_MINIMUM](Config.md#skeleton_subchain_merge_minimum)
- [SNAP\_AVAILABILITY\_DEPTH](Config.md#snap_availability_depth)
- [SNAP\_TRANSITION\_SAFE\_DEPTH](Config.md#snap_transition_safe_depth)
- [STORAGE\_CACHE](Config.md#storage_cache)
- [SYNCED\_STATE\_REMOVAL\_PERIOD](Config.md#synced_state_removal_period)
- [SYNCMODE\_DEFAULT](Config.md#syncmode_default)
- [TRIE\_CACHE](Config.md#trie_cache)

### Methods

- [getDataDirectory](Config.md#getdatadirectory)
- [getDnsDiscovery](Config.md#getdnsdiscovery)
- [getNetworkDirectory](Config.md#getnetworkdirectory)
- [superMsg](Config.md#supermsg)
- [updateSynchronizedState](Config.md#updatesynchronizedstate)
- [getClientKey](Config.md#getclientkey)
- [getConfigDB](Config.md#getconfigdb)

## Constructors

### constructor

• **new Config**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConfigOptions`](../interfaces/ConfigOptions.md) |

#### Defined in



## Properties

### accountCache

• `Readonly` **accountCache**: `number`

#### Defined in



___

### accounts

• `Readonly` **accounts**: [address: Address, privKey: Uint8Array][]

#### Defined in



___

### bootnodes

• `Optional` `Readonly` **bootnodes**: `Multiaddr`[]

#### Defined in



___

### chainCommon

• `Readonly` **chainCommon**: `Common`

#### Defined in



___

### codeCache

• `Readonly` **codeCache**: `number`

#### Defined in



___

### datadir

• `Readonly` **datadir**: `string`

#### Defined in



___

### debugCode

• `Readonly` **debugCode**: `boolean`

#### Defined in



___

### discDns

• `Readonly` **discDns**: `boolean`

#### Defined in



___

### discV4

• `Readonly` **discV4**: `boolean`

#### Defined in



___

### dnsAddr

• `Readonly` **dnsAddr**: `string`

#### Defined in



___

### enableSnapSync

• `Readonly` **enableSnapSync**: `boolean`

#### Defined in



___

### engineNewpayloadMaxExecute

• `Readonly` **engineNewpayloadMaxExecute**: `number`


___

### events

• `Readonly` **events**: `EventBusType`

Central event bus for events emitted by the different
components of the client

#### Defined in



___

### execCommon

• `Readonly` **execCommon**: `Common`

#### Defined in



___

### execution

• `Readonly` **execution**: `boolean`

#### Defined in



___

### extIP

• `Optional` `Readonly` **extIP**: `string`

#### Defined in



___

### key

• `Readonly` **key**: `Uint8Array`

#### Defined in



___

### lastSyncDate

• **lastSyncDate**: `number`

lastSyncDate in ms

#### Defined in



___

### lastsyncronized

• `Optional` **lastsyncronized**: `boolean`

#### Defined in



___

### lightserv

• `Readonly` **lightserv**: `boolean`

#### Defined in



___

### logger

• `Readonly` **logger**: `Logger`

#### Defined in



___

### maxAccountRange

• `Readonly` **maxAccountRange**: `bigint`

#### Defined in



___

### maxFetcherJobs

• `Readonly` **maxFetcherJobs**: `number`

#### Defined in



___

### maxFetcherRequests

• `Readonly` **maxFetcherRequests**: `number`

#### Defined in



___

### maxInvalidBlocksErrorCache

• `Readonly` **maxInvalidBlocksErrorCache**: `number`

#### Defined in



___

### maxPeers

• `Readonly` **maxPeers**: `number`

#### Defined in



___

### maxPerRequest

• `Readonly` **maxPerRequest**: `number`

#### Defined in



___

### maxRangeBytes

• `Readonly` **maxRangeBytes**: `number`

#### Defined in



___

### maxStorageRange

• `Readonly` **maxStorageRange**: `bigint`

#### Defined in



___

### minPeers

• `Readonly` **minPeers**: `number`

#### Defined in



___

### mine

• `Readonly` **mine**: `boolean`

#### Defined in



___

### minerCoinbase

• `Optional` `Readonly` **minerCoinbase**: `Address`

#### Defined in



___

### multiaddrs

• `Optional` `Readonly` **multiaddrs**: `Multiaddr`[]

#### Defined in



___

### numBlocksPerIteration

• `Readonly` **numBlocksPerIteration**: `number`

#### Defined in



___

### port

• `Optional` `Readonly` **port**: `number`

#### Defined in



___

### prefixStorageTrieKeys

• `Readonly` **prefixStorageTrieKeys**: `boolean`

#### Defined in



___

### pruneEngineCache

• `Readonly` **pruneEngineCache**: `boolean`

#### Defined in



___

### safeReorgDistance

• `Readonly` **safeReorgDistance**: `number`

#### Defined in



___

### savePreimages

• `Readonly` **savePreimages**: `boolean`

#### Defined in



___

### saveReceipts

• `Readonly` **saveReceipts**: `boolean`

#### Defined in



___

### server

• `Readonly` **server**: `undefined` \| `RlpxServer` = `undefined`

#### Defined in



___

### shutdown

• **shutdown**: `boolean` = `false`

Client is in the process of shutting down

#### Defined in



___

### skeletonFillCanonicalBackStep

• `Readonly` **skeletonFillCanonicalBackStep**: `number`

#### Defined in



___

### skeletonSubchainMergeMinimum

• `Readonly` **skeletonSubchainMergeMinimum**: `number`

#### Defined in



___

### snapAvailabilityDepth

• `Readonly` **snapAvailabilityDepth**: `bigint`

#### Defined in



___

### snapTransitionSafeDepth

• `Readonly` **snapTransitionSafeDepth**: `bigint`

#### Defined in



___

### statelessVerkle

• `Readonly` **statelessVerkle**: `boolean`

#### Defined in



___

### storageCache

• `Readonly` **storageCache**: `number`

#### Defined in



___

### syncTargetHeight

• `Optional` **syncTargetHeight**: `bigint`

Best known block height

#### Defined in



___

### syncedStateRemovalPeriod

• `Readonly` **syncedStateRemovalPeriod**: `number`

#### Defined in



___

### synchronized

• **synchronized**: `boolean`

#### Defined in



___

### syncmode

• `Readonly` **syncmode**: [`SyncMode`](../enums/SyncMode.md)

#### Defined in



___

### trieCache

• `Readonly` **trieCache**: `number`

#### Defined in



___

### txLookupLimit

• `Readonly` **txLookupLimit**: `number`

#### Defined in



___

### useStringValueTrieDB

• `Readonly` **useStringValueTrieDB**: `boolean`

#### Defined in



___

### vm

• `Optional` `Readonly` **vm**: `VM`

#### Defined in



___

### vmProfilerOpts

• `Optional` `Readonly` **vmProfilerOpts**: `VMProfilerOpts`

#### Defined in



___

### ACCOUNT\_CACHE

▪ `Static` `Readonly` **ACCOUNT\_CACHE**: ``400000``

#### Defined in



___

### CHAIN\_DEFAULT

▪ `Static` `Readonly` **CHAIN\_DEFAULT**: ``"mainnet"``

#### Defined in



___

### CODE\_CACHE

▪ `Static` `Readonly` **CODE\_CACHE**: ``200000``

#### Defined in



___

### DATADIR\_DEFAULT

▪ `Static` `Readonly` **DATADIR\_DEFAULT**: ``"./datadir"``

#### Defined in



___

### DEBUGCODE\_DEFAULT

▪ `Static` `Readonly` **DEBUGCODE\_DEFAULT**: ``false``

#### Defined in



___

### DNSADDR\_DEFAULT

▪ `Static` `Readonly` **DNSADDR\_DEFAULT**: ``"8.8.8.8"``

#### Defined in



___

### ENGINE\_NEWPAYLOAD\_MAX\_EXECUTE

▪ `Static` `Readonly` **ENGINE\_NEWPAYLOAD\_MAX\_EXECUTE**: ``2``

#### Defined in



___

### ENGINE\_NEWPAYLOAD\_MAX\_TXS\_EXECUTE

▪ `Static` `Readonly` **ENGINE\_NEWPAYLOAD\_MAX\_TXS\_EXECUTE**: ``100``

#### Defined in



___

### ENGINE\_PARENTLOOKUP\_MAX\_DEPTH

▪ `Static` `Readonly` **ENGINE\_PARENTLOOKUP\_MAX\_DEPTH**: ``128``

#### Defined in



___

### EXECUTION

▪ `Static` `Readonly` **EXECUTION**: ``true``

#### Defined in



___

### LIGHTSERV\_DEFAULT

▪ `Static` `Readonly` **LIGHTSERV\_DEFAULT**: ``false``

#### Defined in



___

### MAXFETCHERJOBS\_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERJOBS\_DEFAULT**: ``100``

#### Defined in



___

### MAXFETCHERREQUESTS\_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERREQUESTS\_DEFAULT**: ``5``

#### Defined in



___

### MAXPEERS\_DEFAULT

▪ `Static` `Readonly` **MAXPEERS\_DEFAULT**: ``25``

#### Defined in



___

### MAXPERREQUEST\_DEFAULT

▪ `Static` `Readonly` **MAXPERREQUEST\_DEFAULT**: ``100``


___

### MAX\_STORAGE\_RANGE

▪ `Static` `Readonly` **MAX\_STORAGE\_RANGE**: `bigint`

#### Defined in



___

### MINPEERS\_DEFAULT

▪ `Static` `Readonly` **MINPEERS\_DEFAULT**: ``1``

#### Defined in



___

### NUM\_BLOCKS\_PER\_ITERATION

▪ `Static` `Readonly` **NUM\_BLOCKS\_PER\_ITERATION**: ``100``

#### Defined in



___

### PORT\_DEFAULT

▪ `Static` `Readonly` **PORT\_DEFAULT**: ``30303``

#### Defined in



___

### PRUNE\_ENGINE\_CACHE

▪ `Static` `Readonly` **PRUNE\_ENGINE\_CACHE**: ``true``

#### Defined in



___

### SAFE\_REORG\_DISTANCE

▪ `Static` `Readonly` **SAFE\_REORG\_DISTANCE**: ``100``

#### Defined in



___

### SKELETON\_FILL\_CANONICAL\_BACKSTEP

▪ `Static` `Readonly` **SKELETON\_FILL\_CANONICAL\_BACKSTEP**: ``100``

#### Defined in



___

### SKELETON\_SUBCHAIN\_MERGE\_MINIMUM

▪ `Static` `Readonly` **SKELETON\_SUBCHAIN\_MERGE\_MINIMUM**: ``1000``

#### Defined in



___

### SNAP\_AVAILABILITY\_DEPTH

▪ `Static` `Readonly` **SNAP\_AVAILABILITY\_DEPTH**: `bigint`

#### Defined in



___

### SNAP\_TRANSITION\_SAFE\_DEPTH

▪ `Static` `Readonly` **SNAP\_TRANSITION\_SAFE\_DEPTH**: `bigint`

#### Defined in



___

### STORAGE\_CACHE

▪ `Static` `Readonly` **STORAGE\_CACHE**: ``200000``

#### Defined in



___

### SYNCED\_STATE\_REMOVAL\_PERIOD

▪ `Static` `Readonly` **SYNCED\_STATE\_REMOVAL\_PERIOD**: ``60000``

#### Defined in



___

### SYNCMODE\_DEFAULT

▪ `Static` `Readonly` **SYNCMODE\_DEFAULT**: [`Full`](../enums/SyncMode.md#full) = `SyncMode.Full`

#### Defined in



___

### TRIE\_CACHE

▪ `Static` `Readonly` **TRIE\_CACHE**: ``200000``

#### Defined in



## Methods

### getDataDirectory

▸ **getDataDirectory**(`dir`): `string`

Returns the location for each [DataDirectory](../enums/DataDirectory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`DataDirectory`](../enums/DataDirectory.md) |

#### Returns

`string`

#### Defined in



___

### getDnsDiscovery

▸ **getDnsDiscovery**(`option`): `boolean`

Returns specified option or the default setting for whether DNS-based peer discovery
is enabled based on chainName. `true` for goerli

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `undefined` \| `boolean` |

#### Returns

`boolean`

#### Defined in



___

### getNetworkDirectory

▸ **getNetworkDirectory**(): `string`

Returns the network directory for the chain.

#### Returns

`string`

#### Defined in


Event.SYNC_SYNCHRONIZED

#### Parameters

| Name | Type |
| :------ | :------ |
| `latest?` | ``null`` \| `BlockHeader` |
| `emitSyncEvent?` | `boolean` |

#### Returns

`void`

#### Defined in



___

### getClientKey

▸ `Static` **getClientKey**(`datadir`, `common`): `Promise`<`undefined` \| `Uint8Array`\>

Gets the client private key from the config db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `datadir` | `string` |
| `common` | `Common` |

#### Returns

`Promise`<`undefined` \| `Uint8Array`\>

#### Defined in



___

### getConfigDB

▸ `Static` **getConfigDB**(`networkDir`): `Level`<`string` \| `Uint8Array`, `Uint8Array`\>

Returns the config level db.

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkDir` | `string` |

#### Returns

`Level`<`string` \| `Uint8Array`, `Uint8Array`\>

#### Defined in


