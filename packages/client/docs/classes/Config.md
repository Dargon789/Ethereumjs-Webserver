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
- [ignoreStatelessInvalidExecs](Config.md#ignorestatelessinvalidexecs)
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
- [metrics](Config.md#metrics)
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
- [startExecution](Config.md#startexecution)
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

[config.ts:471](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L471)

## Properties

### accountCache

• `Readonly` **accountCache**: `number`

#### Defined in

[config.ts:417](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L417)

___

### accounts

• `Readonly` **accounts**: [address: Address, privKey: Uint8Array][]

#### Defined in

[config.ts:426](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L426)

___

### bootnodes

• `Optional` `Readonly` **bootnodes**: `Multiaddr`[]

#### Defined in

[config.ts:403](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L403)

___

### chainCommon

• `Readonly` **chainCommon**: `Common`

#### Defined in

[config.ts:464](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L464)

___

### codeCache

• `Readonly` **codeCache**: `number`

#### Defined in

[config.ts:419](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L419)

___

### datadir

• `Readonly` **datadir**: `string`

#### Defined in

[config.ts:401](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L401)

___

### debugCode

• `Readonly` **debugCode**: `boolean`

#### Defined in

[config.ts:421](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L421)

___

### discDns

• `Readonly` **discDns**: `boolean`

#### Defined in

[config.ts:422](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L422)

___

### discV4

• `Readonly` **discV4**: `boolean`

#### Defined in

[config.ts:423](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L423)

___

### dnsAddr

• `Readonly` **dnsAddr**: `string`

#### Defined in

[config.ts:414](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L414)

___

### enableSnapSync

• `Readonly` **enableSnapSync**: `boolean`

#### Defined in

[config.ts:447](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L447)

___

### engineNewpayloadMaxExecute

• `Readonly` **engineNewpayloadMaxExecute**: `number`

#### Defined in

[config.ts:440](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L440)

___

### engineNewpayloadMaxTxsExecute

• `Readonly` **engineNewpayloadMaxTxsExecute**: `number`

#### Defined in

[config.ts:441](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L441)

___

### engineParentLookupMaxDepth

• `Readonly` **engineParentLookupMaxDepth**: `number`

#### Defined in

[config.ts:439](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L439)

___

### events

• `Readonly` **events**: `EventBusType`

Central event bus for events emitted by the different
components of the client

#### Defined in

[config.ts:353](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L353)

___

### execCommon

• `Readonly` **execCommon**: `Common`

#### Defined in

[config.ts:465](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L465)

___

### execution

• `Readonly` **execution**: `boolean`

#### Defined in

[config.ts:415](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L415)

___

### extIP

• `Optional` `Readonly` **extIP**: `string`

#### Defined in

[config.ts:405](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L405)

___

### ignoreStatelessInvalidExecs

• `Readonly` **ignoreStatelessInvalidExecs**: `string` \| `boolean`

#### Defined in

[config.ts:453](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L453)

___

### isSingleNode

• `Readonly` **isSingleNode**: `boolean`

#### Defined in

[config.ts:425](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L425)

___

### key

• `Readonly` **key**: `Uint8Array`

#### Defined in

[config.ts:402](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L402)

___

### lastSyncDate

• **lastSyncDate**: `number`

lastSyncDate in ms

#### Defined in

[config.ts:458](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L458)

___

### lastsyncronized

• `Optional` **lastsyncronized**: `boolean`

#### Defined in

[config.ts:456](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L456)

___

### lightserv

• `Readonly` **lightserv**: `boolean`

#### Defined in

[config.ts:400](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L400)

___

### logger

• `Readonly` **logger**: `Logger`

#### Defined in

[config.ts:397](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L397)

___

### maxAccountRange

• `Readonly` **maxAccountRange**: `bigint`

#### Defined in

[config.ts:434](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L434)

___

### maxFetcherJobs

• `Readonly` **maxFetcherJobs**: `number`

#### Defined in

[config.ts:410](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L410)

___

### maxFetcherRequests

• `Readonly` **maxFetcherRequests**: `number`

#### Defined in

[config.ts:411](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L411)

___

### maxInvalidBlocksErrorCache

• `Readonly` **maxInvalidBlocksErrorCache**: `number`

#### Defined in

[config.ts:436](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L436)

___

### maxPeers

• `Readonly` **maxPeers**: `number`

#### Defined in

[config.ts:413](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L413)

___

### maxPerRequest

• `Readonly` **maxPerRequest**: `number`

#### Defined in

[config.ts:409](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L409)

___

### maxRangeBytes

• `Readonly` **maxRangeBytes**: `number`

#### Defined in

[config.ts:433](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L433)

___

### maxStorageRange

• `Readonly` **maxStorageRange**: `bigint`

#### Defined in

[config.ts:435](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L435)

___

### metrics

• `Readonly` **metrics**: `undefined` \| `PrometheusMetrics`

#### Defined in

[config.ts:469](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L469)

___

### minPeers

• `Readonly` **minPeers**: `number`

#### Defined in

[config.ts:412](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L412)

___

### mine

• `Readonly` **mine**: `boolean`

#### Defined in

[config.ts:424](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L424)

___

### minerCoinbase

• `Optional` `Readonly` **minerCoinbase**: `Address`

#### Defined in

[config.ts:427](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L427)

___

### multiaddrs

• `Optional` `Readonly` **multiaddrs**: `Multiaddr`[]

#### Defined in

[config.ts:406](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L406)

___

### numBlocksPerIteration

• `Readonly` **numBlocksPerIteration**: `number`

#### Defined in

[config.ts:416](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L416)

___

### port

• `Optional` `Readonly` **port**: `number`

#### Defined in

[config.ts:404](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L404)

___

### prefixStorageTrieKeys

• `Readonly` **prefixStorageTrieKeys**: `boolean`

#### Defined in

[config.ts:445](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L445)

___

### pruneEngineCache

• `Readonly` **pruneEngineCache**: `boolean`

#### Defined in

[config.ts:437](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L437)

___

### safeReorgDistance

• `Readonly` **safeReorgDistance**: `number`

#### Defined in

[config.ts:430](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L430)

___

### savePreimages

• `Readonly` **savePreimages**: `boolean`

#### Defined in

[config.ts:449](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L449)

___

### saveReceipts

• `Readonly` **saveReceipts**: `boolean`

#### Defined in

[config.ts:407](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L407)

___

### server

• `Readonly` **server**: `undefined` \| `RlpxServer` = `undefined`

#### Defined in

[config.ts:467](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L467)

___

### shutdown

• **shutdown**: `boolean` = `false`

Client is in the process of shutting down

#### Defined in

[config.ts:462](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L462)

___

### skeletonFillCanonicalBackStep

• `Readonly` **skeletonFillCanonicalBackStep**: `number`

#### Defined in

[config.ts:431](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L431)

___

### skeletonSubchainMergeMinimum

• `Readonly` **skeletonSubchainMergeMinimum**: `number`

#### Defined in

[config.ts:432](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L432)

___

### snapAvailabilityDepth

• `Readonly` **snapAvailabilityDepth**: `bigint`

#### Defined in

[config.ts:442](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L442)

___

### snapTransitionSafeDepth

• `Readonly` **snapTransitionSafeDepth**: `bigint`

#### Defined in

[config.ts:443](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L443)

___

### startExecution

• `Readonly` **startExecution**: `boolean`

#### Defined in

[config.ts:452](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L452)

___

### statelessVerkle

• `Readonly` **statelessVerkle**: `boolean`

#### Defined in

[config.ts:451](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L451)

___

### storageCache

• `Readonly` **storageCache**: `number`

#### Defined in

[config.ts:418](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L418)

___

### syncTargetHeight

• `Optional` **syncTargetHeight**: `bigint`

Best known block height

#### Defined in

[config.ts:460](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L460)

___

### syncedStateRemovalPeriod

• `Readonly` **syncedStateRemovalPeriod**: `number`

#### Defined in

[config.ts:438](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L438)

___

### synchronized

• **synchronized**: `boolean`

#### Defined in

[config.ts:455](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L455)

___

### syncmode

• `Readonly` **syncmode**: [`SyncMode`](../enums/SyncMode.md)

#### Defined in

[config.ts:398](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L398)

___

### trieCache

• `Readonly` **trieCache**: `number`

#### Defined in

[config.ts:420](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L420)

___

### txLookupLimit

• `Readonly` **txLookupLimit**: `number`

#### Defined in

[config.ts:408](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L408)

___

### useStringValueTrieDB

• `Readonly` **useStringValueTrieDB**: `boolean`

#### Defined in

[config.ts:448](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L448)

___

### vm

• `Optional` `Readonly` **vm**: `VM`

#### Defined in

[config.ts:399](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L399)

___

### vmProfilerOpts

• `Optional` `Readonly` **vmProfilerOpts**: `VMProfilerOpts`

#### Defined in

[config.ts:428](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L428)

___

### ACCOUNT\_CACHE

▪ `Static` `Readonly` **ACCOUNT\_CACHE**: ``400000``

#### Defined in

[config.ts:368](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L368)

___

### CHAIN\_DEFAULT

▪ `Static` `Readonly` **CHAIN\_DEFAULT**: ``"mainnet"``

#### Defined in

[config.ts:355](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L355)

___

### CODE\_CACHE

▪ `Static` `Readonly` **CODE\_CACHE**: ``200000``

#### Defined in

[config.ts:370](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L370)

___

### DATADIR\_DEFAULT

▪ `Static` `Readonly` **DATADIR\_DEFAULT**: ``"./datadir"``

#### Defined in

[config.ts:358](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L358)

___

### DEBUGCODE\_DEFAULT

▪ `Static` `Readonly` **DEBUGCODE\_DEFAULT**: ``false``

#### Defined in

[config.ts:372](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L372)

___

### DNSADDR\_DEFAULT

▪ `Static` `Readonly` **DNSADDR\_DEFAULT**: ``"8.8.8.8"``

#### Defined in

[config.ts:365](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L365)

___

### ENGINE\_NEWPAYLOAD\_MAX\_EXECUTE

▪ `Static` `Readonly` **ENGINE\_NEWPAYLOAD\_MAX\_EXECUTE**: ``2``

#### Defined in

[config.ts:389](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L389)

___

### ENGINE\_NEWPAYLOAD\_MAX\_TXS\_EXECUTE

▪ `Static` `Readonly` **ENGINE\_NEWPAYLOAD\_MAX\_TXS\_EXECUTE**: ``100``

#### Defined in

[config.ts:391](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L391)

___

### ENGINE\_PARENTLOOKUP\_MAX\_DEPTH

▪ `Static` `Readonly` **ENGINE\_PARENTLOOKUP\_MAX\_DEPTH**: ``128``

#### Defined in

[config.ts:388](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L388)

___

### EXECUTION

▪ `Static` `Readonly` **EXECUTION**: ``true``

#### Defined in

[config.ts:366](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L366)

___

### LIGHTSERV\_DEFAULT

▪ `Static` `Readonly` **LIGHTSERV\_DEFAULT**: ``false``

#### Defined in

[config.ts:357](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L357)

___

### MAXFETCHERJOBS\_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERJOBS\_DEFAULT**: ``100``

#### Defined in

[config.ts:361](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L361)

___

### MAXFETCHERREQUESTS\_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERREQUESTS\_DEFAULT**: ``5``

#### Defined in

[config.ts:362](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L362)

___

### MAXPEERS\_DEFAULT

▪ `Static` `Readonly` **MAXPEERS\_DEFAULT**: ``25``

#### Defined in

[config.ts:364](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L364)

___

### MAXPERREQUEST\_DEFAULT

▪ `Static` `Readonly` **MAXPERREQUEST\_DEFAULT**: ``100``

#### Defined in

[config.ts:360](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L360)

___

### MAX\_ACCOUNT\_RANGE

▪ `Static` `Readonly` **MAX\_ACCOUNT\_RANGE**: `bigint`

#### Defined in

[config.ts:379](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L379)

___

### MAX\_INVALID\_BLOCKS\_ERROR\_CACHE

▪ `Static` `Readonly` **MAX\_INVALID\_BLOCKS\_ERROR\_CACHE**: ``128``

#### Defined in

[config.ts:383](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L383)

___

### MAX\_RANGE\_BYTES

▪ `Static` `Readonly` **MAX\_RANGE\_BYTES**: ``50000``

#### Defined in

[config.ts:377](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L377)

___

### MAX\_STORAGE\_RANGE

▪ `Static` `Readonly` **MAX\_STORAGE\_RANGE**: `bigint`

#### Defined in

[config.ts:381](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L381)

___

### MINPEERS\_DEFAULT

▪ `Static` `Readonly` **MINPEERS\_DEFAULT**: ``1``

#### Defined in

[config.ts:363](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L363)

___

### NUM\_BLOCKS\_PER\_ITERATION

▪ `Static` `Readonly` **NUM\_BLOCKS\_PER\_ITERATION**: ``100``

#### Defined in

[config.ts:367](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L367)

___

### PORT\_DEFAULT

▪ `Static` `Readonly` **PORT\_DEFAULT**: ``30303``

#### Defined in

[config.ts:359](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L359)

___

### PRUNE\_ENGINE\_CACHE

▪ `Static` `Readonly` **PRUNE\_ENGINE\_CACHE**: ``true``

#### Defined in

[config.ts:384](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L384)

___

### SAFE\_REORG\_DISTANCE

▪ `Static` `Readonly` **SAFE\_REORG\_DISTANCE**: ``100``

#### Defined in

[config.ts:373](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L373)

___

### SKELETON\_FILL\_CANONICAL\_BACKSTEP

▪ `Static` `Readonly` **SKELETON\_FILL\_CANONICAL\_BACKSTEP**: ``100``

#### Defined in

[config.ts:374](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L374)

___

### SKELETON\_SUBCHAIN\_MERGE\_MINIMUM

▪ `Static` `Readonly` **SKELETON\_SUBCHAIN\_MERGE\_MINIMUM**: ``1000``

#### Defined in

[config.ts:375](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L375)

___

### SNAP\_AVAILABILITY\_DEPTH

▪ `Static` `Readonly` **SNAP\_AVAILABILITY\_DEPTH**: `bigint`

#### Defined in

[config.ts:392](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L392)

___

### SNAP\_TRANSITION\_SAFE\_DEPTH

▪ `Static` `Readonly` **SNAP\_TRANSITION\_SAFE\_DEPTH**: `bigint`

#### Defined in

[config.ts:395](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L395)

___

### STORAGE\_CACHE

▪ `Static` `Readonly` **STORAGE\_CACHE**: ``200000``

#### Defined in

[config.ts:369](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L369)

___

### SYNCED\_STATE\_REMOVAL\_PERIOD

▪ `Static` `Readonly` **SYNCED\_STATE\_REMOVAL\_PERIOD**: ``60000``

#### Defined in

[config.ts:386](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L386)

___

### SYNCMODE\_DEFAULT

▪ `Static` `Readonly` **SYNCMODE\_DEFAULT**: [`Full`](../enums/SyncMode.md#full) = `SyncMode.Full`

#### Defined in

[config.ts:356](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L356)

___

### TRIE\_CACHE

▪ `Static` `Readonly` **TRIE\_CACHE**: ``200000``

#### Defined in

[config.ts:371](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L371)

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

[config.ts:652](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L652)

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

[config.ts:713](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L713)

___

### getNetworkDirectory

▸ **getNetworkDirectory**(): `string`

Returns the network directory for the chain.

#### Returns

`string`

#### Defined in

[config.ts:644](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L644)

___

### superMsg

▸ **superMsg**(`msgs`, `meta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgs` | `string` \| `string`[] |
| `meta?` | `any` |

#### Returns

`void`

#### Defined in

[config.ts:694](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L694)

___

### updateSynchronizedState

▸ **updateSynchronizedState**(`latest?`, `emitSyncEvent?`): `void`

Update the synchronized state of the chain

**`Emits`**

Event.SYNC_SYNCHRONIZED

#### Parameters

| Name | Type |
| :------ | :------ |
| `latest?` | ``null`` \| `BlockHeader` |
| `emitSyncEvent?` | `boolean` |

#### Returns

`void`

#### Defined in

[config.ts:585](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L585)

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

[config.ts:676](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L676)

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

[config.ts:669](https://github.com/Dargon789/Ethereumjs-Webserver/blob/master/packages/client/src/config.ts#L669)
