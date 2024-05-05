[@ethereumjs/blockchain](../README.md) / CliqueConsensus

# Class: CliqueConsensus

This class encapsulates Clique-related consensus functionality when used with the Blockchain class.
Note: reorgs which happen between epoch transitions, which change the internal voting state over the reorg
will result in failure and is currently not supported.
The hotfix for this could be: re-load the latest epoch block (this has the clique state in the extraData of the header)
Now replay all blocks on top of it. This should validate the chain up to the new/reorged tip which previously threw.

## Implements

- [`Consensus`](../interfaces/Consensus.md)

## Table of contents

### Constructors

- [constructor](CliqueConsensus.md#constructor)

### Properties

- [\_cliqueLatestBlockSigners](CliqueConsensus.md#_cliquelatestblocksigners)
- [\_cliqueLatestSignerStates](CliqueConsensus.md#_cliquelatestsignerstates)
- [\_cliqueLatestVotes](CliqueConsensus.md#_cliquelatestvotes)
- [algorithm](CliqueConsensus.md#algorithm)
- [blockchain](CliqueConsensus.md#blockchain)

### Methods

- [cliqueActiveSigners](CliqueConsensus.md#cliqueactivesigners)
- [cliqueSignerInTurn](CliqueConsensus.md#cliquesignerinturn)
- [genesisInit](CliqueConsensus.md#genesisinit)
- [newBlock](CliqueConsensus.md#newblock)
- [setup](CliqueConsensus.md#setup)
- [validateConsensus](CliqueConsensus.md#validateconsensus)
- [validateDifficulty](CliqueConsensus.md#validatedifficulty)

## Constructors

### constructor

• **new CliqueConsensus**()

#### Defined in

[consensus/clique.ts:112](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L112)

## Properties

### \_cliqueLatestBlockSigners

• **\_cliqueLatestBlockSigners**: `CliqueLatestBlockSigners` = `[]`

List of signers for the last consecutive Blockchain.cliqueSignerLimit blocks.
Kept as a snapshot for quickly checking for "recently signed" error.
Format: [ [BLOCK_NUMBER, SIGNER_ADDRESS], ...]

On reorgs elements from the array are removed until BLOCK_NUMBER > REORG_BLOCK.

#### Defined in

[consensus/clique.ts:110](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L110)

___

### \_cliqueLatestSignerStates

• **\_cliqueLatestSignerStates**: `CliqueLatestSignerStates` = `[]`

List with the latest signer states checkpointed on blocks where
a change (added new or removed a signer) occurred.

Format:
[ [BLOCK_NUMBER_1, [SIGNER1, SIGNER 2,]], [BLOCK_NUMBER2, [SIGNER1, SIGNER3]], ...]

The top element from the array represents the list of current signers.
On reorgs elements from the array are removed until BLOCK_NUMBER > REORG_BLOCK.

Always keep at least one item on the stack.

#### Defined in

[consensus/clique.ts:85](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L85)

___

### \_cliqueLatestVotes

• **\_cliqueLatestVotes**: `CliqueLatestVotes` = `[]`

List with the latest signer votes.

Format:
[ [BLOCK_NUMBER_1, [SIGNER, BENEFICIARY, AUTH]], [BLOCK_NUMBER_1, [SIGNER, BENEFICIARY, AUTH]] ]
where AUTH = CLIQUE_NONCE_AUTH | CLIQUE_NONCE_DROP

For votes all elements here must be taken into account with a
block number >= LAST_EPOCH_BLOCK
(nevertheless keep entries with blocks before EPOCH_BLOCK in case a reorg happens
during an epoch change)

On reorgs elements from the array are removed until BLOCK_NUMBER > REORG_BLOCK.

#### Defined in

[consensus/clique.ts:101](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L101)

___

### algorithm

• **algorithm**: `ConsensusAlgorithm`

#### Implementation of

[Consensus](../interfaces/Consensus.md).[algorithm](../interfaces/Consensus.md#algorithm)

#### Defined in

[consensus/clique.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L63)

___

### blockchain

• **blockchain**: `undefined` \| [`Blockchain`](Blockchain.md)

#### Defined in

[consensus/clique.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L62)

## Methods

### cliqueActiveSigners

▸ **cliqueActiveSigners**(`blockNum`): `Address`[]

Returns a list with the current block signers

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNum` | `bigint` |

#### Returns

`Address`[]

#### Defined in

[consensus/clique.ts:429](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L429)

___

### cliqueSignerInTurn

▸ **cliqueSignerInTurn**(`signer`, `blockNum`): `Promise`<`boolean`\>

Helper to determine if a signer is in or out of turn for the next block.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signer` | `Address` | The signer address |
| `blockNum` | `bigint` | - |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[consensus/clique.ts:601](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L601)

___

### genesisInit

▸ **genesisInit**(`genesisBlock`): `Promise`<`void`\>

Initialize genesis for consensus mechanism

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `genesisBlock` | `Block` | genesis block |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Consensus](../interfaces/Consensus.md).[genesisInit](../interfaces/Consensus.md#genesisinit)

#### Defined in

[consensus/clique.ts:130](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L130)

___

### newBlock

▸ **newBlock**(`block`, `commonAncestor`): `Promise`<`void`\>

Update consensus on new block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `Block` | new block |
| `commonAncestor` | `undefined` \| `BlockHeader` | common ancestor block header (optional) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Consensus](../interfaces/Consensus.md).[newBlock](../interfaces/Consensus.md#newblock)

#### Defined in

[consensus/clique.ts:194](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L194)

___

### setup

▸ **setup**(`param`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | [`ConsensusOptions`](../interfaces/ConsensusOptions.md) | dictionary containin a [Blockchain](Blockchain.md) object  Note: this method must be called before consensus checks are used or type errors will occur |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Consensus](../interfaces/Consensus.md).[setup](../interfaces/Consensus.md#setup)

#### Defined in

[consensus/clique.ts:122](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L122)

___

### validateConsensus

▸ **validateConsensus**(`block`): `Promise`<`void`\>

Validate block consensus parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `Block` | block to be validated |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Consensus](../interfaces/Consensus.md).[validateConsensus](../interfaces/Consensus.md#validateconsensus)

#### Defined in

[consensus/clique.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L134)

___

### validateDifficulty

▸ **validateDifficulty**(`header`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `BlockHeader` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Consensus](../interfaces/Consensus.md).[validateDifficulty](../interfaces/Consensus.md#validatedifficulty)

#### Defined in

[consensus/clique.ts:165](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/blockchain/src/consensus/clique.ts#L165)
