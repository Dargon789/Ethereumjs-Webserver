[@ethereumjs/tx](../README.md) / BlobEIP4844Transaction

# Class: BlobEIP4844Transaction

Typed transaction with a new gas fee market mechanism for transactions that include "blobs" of data

- TransactionType: 3
- EIP: [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844)

## Hierarchy

- `BaseTransaction`<[`BlobEIP4844`](../enums/TransactionType.md#blobeip4844)\>

  ↳ **`BlobEIP4844Transaction`**

## Table of contents

### Constructors

- [constructor](BlobEIP4844Transaction.md#constructor)

### Properties

- [AccessListJSON](BlobEIP4844Transaction.md#accesslistjson)
- [accessList](BlobEIP4844Transaction.md#accesslist)
- [blobVersionedHashes](BlobEIP4844Transaction.md#blobversionedhashes)
- [blobs](BlobEIP4844Transaction.md#blobs)
- [cache](BlobEIP4844Transaction.md#cache)
- [chainId](BlobEIP4844Transaction.md#chainid)
- [common](BlobEIP4844Transaction.md#common)
- [data](BlobEIP4844Transaction.md#data)
- [gasLimit](BlobEIP4844Transaction.md#gaslimit)
- [kzgCommitments](BlobEIP4844Transaction.md#kzgcommitments)
- [kzgProofs](BlobEIP4844Transaction.md#kzgproofs)
- [maxFeePerBlobGas](BlobEIP4844Transaction.md#maxfeeperblobgas)
- [maxFeePerGas](BlobEIP4844Transaction.md#maxfeepergas)
- [maxPriorityFeePerGas](BlobEIP4844Transaction.md#maxpriorityfeepergas)
- [nonce](BlobEIP4844Transaction.md#nonce)
- [r](BlobEIP4844Transaction.md#r)
- [s](BlobEIP4844Transaction.md#s)
- [to](BlobEIP4844Transaction.md#to)
- [v](BlobEIP4844Transaction.md#v)
- [value](BlobEIP4844Transaction.md#value)

### Accessors

- [type](BlobEIP4844Transaction.md#type)

### Methods

- [addSignature](BlobEIP4844Transaction.md#addsignature)
- [errorStr](BlobEIP4844Transaction.md#errorstr)
- [getBaseFee](BlobEIP4844Transaction.md#getbasefee)
- [getDataFee](BlobEIP4844Transaction.md#getdatafee)
- [getHashedMessageToSign](BlobEIP4844Transaction.md#gethashedmessagetosign)
- [getMessageToSign](BlobEIP4844Transaction.md#getmessagetosign)
- [getMessageToVerifySignature](BlobEIP4844Transaction.md#getmessagetoverifysignature)
- [getSenderAddress](BlobEIP4844Transaction.md#getsenderaddress)
- [getSenderPublicKey](BlobEIP4844Transaction.md#getsenderpublickey)
- [getUpfrontCost](BlobEIP4844Transaction.md#getupfrontcost)
- [getValidationErrors](BlobEIP4844Transaction.md#getvalidationerrors)
- [hash](BlobEIP4844Transaction.md#hash)
- [isSigned](BlobEIP4844Transaction.md#issigned)
- [isValid](BlobEIP4844Transaction.md#isvalid)
- [numBlobs](BlobEIP4844Transaction.md#numblobs)
- [raw](BlobEIP4844Transaction.md#raw)
- [serialize](BlobEIP4844Transaction.md#serialize)
- [serializeNetworkWrapper](BlobEIP4844Transaction.md#serializenetworkwrapper)
- [sign](BlobEIP4844Transaction.md#sign)
- [supports](BlobEIP4844Transaction.md#supports)
- [toCreationAddress](BlobEIP4844Transaction.md#tocreationaddress)
- [toJSON](BlobEIP4844Transaction.md#tojson)
- [verifySignature](BlobEIP4844Transaction.md#verifysignature)
- [fromSerializedBlobTxNetworkWrapper](BlobEIP4844Transaction.md#fromserializedblobtxnetworkwrapper)
- [fromSerializedTx](BlobEIP4844Transaction.md#fromserializedtx)
- [fromTxData](BlobEIP4844Transaction.md#fromtxdata)
- [fromValuesArray](BlobEIP4844Transaction.md#fromvaluesarray)
- [minimalFromNetworkWrapper](BlobEIP4844Transaction.md#minimalfromnetworkwrapper)

## Constructors

### constructor

• **new BlobEIP4844Transaction**(`txData`, `opts?`)

This constructor takes the values, validates them, assigns them and freezes the object.

It is not recommended to use this constructor directly. Instead use
the static constructors or factory methods to assist in creating a Transaction object from
varying data types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [`BlobEIP4844TxData`](../interfaces/BlobEIP4844TxData.md) |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Overrides

BaseTransaction&lt;TransactionType.BlobEIP4844\&gt;.constructor

#### Defined in

[tx/src/eip4844Transaction.ts:103](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L103)

## Properties

### AccessListJSON

• `Readonly` **AccessListJSON**: [`AccessList`](../README.md#accesslist)

#### Defined in

[tx/src/eip4844Transaction.ts:85](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L85)

___

### accessList

• `Readonly` **accessList**: [`AccessListBytes`](../README.md#accesslistbytes)

#### Defined in

[tx/src/eip4844Transaction.ts:84](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L84)

___

### blobVersionedHashes

• **blobVersionedHashes**: `Uint8Array`[]

#### Defined in

[tx/src/eip4844Transaction.ts:91](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L91)

___

### blobs

• `Optional` **blobs**: `Uint8Array`[]

#### Defined in

[tx/src/eip4844Transaction.ts:92](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L92)

___

### cache

• **cache**: [`TransactionCache`](../interfaces/TransactionCache.md)

#### Inherited from

BaseTransaction.cache

#### Defined in

[tx/src/baseTransaction.ts:54](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L54)

___

### chainId

• `Readonly` **chainId**: `bigint`

#### Defined in

[tx/src/eip4844Transaction.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L83)

___

### common

• `Readonly` **common**: `Common`

#### Overrides

BaseTransaction.common

#### Defined in

[tx/src/eip4844Transaction.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L90)

___

### data

• `Readonly` **data**: `Uint8Array`

#### Inherited from

BaseTransaction.data

#### Defined in

[tx/src/baseTransaction.ts:46](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L46)

___

### gasLimit

• `Readonly` **gasLimit**: `bigint`

#### Inherited from

BaseTransaction.gasLimit

#### Defined in

[tx/src/baseTransaction.ts:43](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L43)

___

### kzgCommitments

• `Optional` **kzgCommitments**: `Uint8Array`[]

#### Defined in

[tx/src/eip4844Transaction.ts:93](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L93)

___

### kzgProofs

• `Optional` **kzgProofs**: `Uint8Array`[]

#### Defined in

[tx/src/eip4844Transaction.ts:94](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L94)

___

### maxFeePerBlobGas

• `Readonly` **maxFeePerBlobGas**: `bigint`

#### Defined in

[tx/src/eip4844Transaction.ts:88](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L88)

___

### maxFeePerGas

• `Readonly` **maxFeePerGas**: `bigint`

#### Defined in

[tx/src/eip4844Transaction.ts:87](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L87)

___

### maxPriorityFeePerGas

• `Readonly` **maxPriorityFeePerGas**: `bigint`

#### Defined in

[tx/src/eip4844Transaction.ts:86](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L86)

___

### nonce

• `Readonly` **nonce**: `bigint`

#### Inherited from

BaseTransaction.nonce

#### Defined in

[tx/src/baseTransaction.ts:42](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L42)

___

### r

• `Optional` `Readonly` **r**: `bigint`

#### Inherited from

BaseTransaction.r

#### Defined in

[tx/src/baseTransaction.ts:49](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L49)

___

### s

• `Optional` `Readonly` **s**: `bigint`

#### Inherited from

BaseTransaction.s

#### Defined in

[tx/src/baseTransaction.ts:50](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L50)

___

### to

• `Optional` `Readonly` **to**: `Address`

#### Inherited from

BaseTransaction.to

#### Defined in

[tx/src/baseTransaction.ts:44](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L44)

___

### v

• `Optional` `Readonly` **v**: `bigint`

#### Inherited from

BaseTransaction.v

#### Defined in

[tx/src/baseTransaction.ts:48](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L48)

___

### value

• `Readonly` **value**: `bigint`

#### Inherited from

BaseTransaction.value

#### Defined in

[tx/src/baseTransaction.ts:45](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L45)

## Accessors

### type

• `get` **type**(): [`TransactionType`](../enums/TransactionType.md)

Returns the transaction type.

Note: legacy txs will return tx type `0`.

#### Returns

[`TransactionType`](../enums/TransactionType.md)

#### Inherited from

BaseTransaction.type

#### Defined in

[tx/src/baseTransaction.ts:121](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L121)

## Methods

### addSignature

▸ **addSignature**(`v`, `r`, `s`, `convertV?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `bigint` | `undefined` |
| `r` | `bigint` \| `Uint8Array` | `undefined` |
| `s` | `bigint` \| `Uint8Array` | `undefined` |
| `convertV` | `boolean` | `false` |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Overrides

BaseTransaction.addSignature

#### Defined in

[tx/src/eip4844Transaction.ts:532](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L532)

___

### errorStr

▸ **errorStr**(): `string`

Return a compact error string representation of the object

#### Returns

`string`

#### Overrides

BaseTransaction.errorStr

#### Defined in

[tx/src/eip4844Transaction.ts:568](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L568)

___

### getBaseFee

▸ **getBaseFee**(): `bigint`

The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)

#### Returns

`bigint`

#### Inherited from

BaseTransaction.getBaseFee

#### Defined in

[tx/src/baseTransaction.ts:176](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L176)

___

### getDataFee

▸ **getDataFee**(): `bigint`

The amount of gas paid for the data in this tx

#### Returns

`bigint`

#### Overrides

BaseTransaction.getDataFee

#### Defined in

[tx/src/eip4844Transaction.ts:395](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L395)

___

### getHashedMessageToSign

▸ **getHashedMessageToSign**(): `Uint8Array`

Returns the hashed serialized unsigned tx, which can be used
to sign the transaction (e.g. for sending to a hardware wallet).

Note: in contrast to the legacy tx the raw message format is already
serialized and doesn't need to be RLP encoded any more.

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.getHashedMessageToSign

#### Defined in

[tx/src/eip4844Transaction.ts:492](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L492)

___

### getMessageToSign

▸ **getMessageToSign**(): `Uint8Array`

Returns the raw serialized unsigned tx, which can be used
to sign the transaction (e.g. for sending to a hardware wallet).

Note: in contrast to the legacy tx the raw message format is already
serialized and doesn't need to be RLP encoded any more.

```javascript
const serializedMessage = tx.getMessageToSign() // use this for the HW wallet input
```

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.getMessageToSign

#### Defined in

[tx/src/eip4844Transaction.ts:481](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L481)

___

### getMessageToVerifySignature

▸ **getMessageToVerifySignature**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.getMessageToVerifySignature

#### Defined in

[tx/src/eip4844Transaction.ts:506](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L506)

___

### getSenderAddress

▸ **getSenderAddress**(): `Address`

Returns the sender's address

#### Returns

`Address`

#### Inherited from

BaseTransaction.getSenderAddress

#### Defined in

[tx/src/baseTransaction.ts:272](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L272)

___

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Uint8Array`

Returns the public key of the sender

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.getSenderPublicKey

#### Defined in

[tx/src/eip4844Transaction.ts:513](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L513)

___

### getUpfrontCost

▸ **getUpfrontCost**(`baseFee?`): `bigint`

The up front amount that an account must have for this transaction to be valid

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseFee` | `bigint` | `BIGINT_0` | The base fee of the block (will be set to 0 if not provided) |

#### Returns

`bigint`

#### Overrides

BaseTransaction.getUpfrontCost

#### Defined in

[tx/src/eip4844Transaction.ts:403](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L403)

___

### getValidationErrors

▸ **getValidationErrors**(): `string`[]

Validates the transaction signature and minimum gas requirements.

#### Returns

`string`[]

an array of error strings

#### Inherited from

BaseTransaction.getValidationErrors

#### Defined in

[tx/src/baseTransaction.ts:149](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L149)

___

### hash

▸ **hash**(): `Uint8Array`

Computes a sha3-256 hash of the serialized tx.

This method can only be used for signed txs (it throws otherwise).
Use [getMessageToSign](BlobEIP4844Transaction.md#getmessagetosign) to get a tx hash for the purpose of signing.

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.hash

#### Defined in

[tx/src/eip4844Transaction.ts:502](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L502)

___

### isSigned

▸ **isSigned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseTransaction.isSigned

#### Defined in

[tx/src/baseTransaction.ts:247](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L247)

___

### isValid

▸ **isValid**(): `boolean`

Validates the transaction signature and minimum gas requirements.

#### Returns

`boolean`

true if the transaction is valid, false otherwise

#### Inherited from

BaseTransaction.isValid

#### Defined in

[tx/src/baseTransaction.ts:167](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L167)

___

### numBlobs

▸ **numBlobs**(): `number`

#### Returns

`number`

the number of blobs included with this transaction

#### Defined in

[tx/src/eip4844Transaction.ts:587](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L587)

___

### raw

▸ **raw**(): `BlobEIP4844TxValuesArray`

Returns a Uint8Array Array of the raw Bytes of the EIP-4844 transaction, in order.

Format: [chain_id, nonce, max_priority_fee_per_gas, max_fee_per_gas, gas_limit, to, value, data,
access_list, max_fee_per_data_gas, blob_versioned_hashes, y_parity, r, s]`.

Use {@link BlobEIP4844Transaction.serialize} to add a transaction to a block
with {@link Block.fromValuesArray}.

For an unsigned tx this method uses the empty Bytes values for the
signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
representation for external signing use [getMessageToSign](BlobEIP4844Transaction.md#getmessagetosign).

#### Returns

`BlobEIP4844TxValuesArray`

#### Overrides

BaseTransaction.raw

#### Defined in

[tx/src/eip4844Transaction.ts:420](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L420)

___

### serialize

▸ **serialize**(): `Uint8Array`

Returns the serialized encoding of the EIP-4844 transaction.

Format: `0x03 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
access_list, max_fee_per_data_gas, blob_versioned_hashes, y_parity, r, s])`.

Note that in contrast to the legacy tx serialization format this is not
valid RLP any more due to the raw tx type preceding and concatenated to
the RLP encoding of the values.

#### Returns

`Uint8Array`

#### Overrides

BaseTransaction.serialize

#### Defined in

[tx/src/eip4844Transaction.ts:449](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L449)

___

### serializeNetworkWrapper

▸ **serializeNetworkWrapper**(): `Uint8Array`

#### Returns

`Uint8Array`

the serialized form of a blob transaction in the network wrapper format (used for gossipping mempool transactions over devp2p)

#### Defined in

[tx/src/eip4844Transaction.ts:456](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L456)

___

### sign

▸ **sign**(`privateKey`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

Signs a transaction.

Note that the signed tx is returned as a new object,
use as follows:
```javascript
const signedTx = tx.sign(privateKey)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Uint8Array` |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Inherited from

BaseTransaction.sign

#### Defined in

[tx/src/baseTransaction.ts:290](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L290)

___

### supports

▸ **supports**(`capability`): `boolean`

Checks if a tx type defining capability is active
on a tx, for example the EIP-1559 fee market mechanism
or the EIP-2930 access list feature.

Note that this is different from the tx type itself,
so EIP-2930 access lists can very well be active
on an EIP-1559 tx for example.

This method can be useful for feature checks if the
tx type is unknown (e.g. when instantiated with
the tx factory).

See `Capabilities` in the `types` module for a reference
on all supported capabilities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `capability` | [`Capability`](../enums/Capability.md) |

#### Returns

`boolean`

#### Inherited from

BaseTransaction.supports

#### Defined in

[tx/src/baseTransaction.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L141)

___

### toCreationAddress

▸ **toCreationAddress**(): `boolean`

If the tx's `to` is to the creation address

#### Returns

`boolean`

#### Inherited from

BaseTransaction.toCreationAddress

#### Defined in

[tx/src/baseTransaction.ts:216](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L216)

___

### toJSON

▸ **toJSON**(): [`JsonTx`](../interfaces/JsonTx.md)

#### Returns

[`JsonTx`](../interfaces/JsonTx.md)

#### Overrides

BaseTransaction.toJSON

#### Defined in

[tx/src/eip4844Transaction.ts:517](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L517)

___

### verifySignature

▸ **verifySignature**(): `boolean`

Determines if the signature is valid

#### Returns

`boolean`

#### Inherited from

BaseTransaction.verifySignature

#### Defined in

[tx/src/baseTransaction.ts:259](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/baseTransaction.ts#L259)

___

### fromSerializedBlobTxNetworkWrapper

▸ `Static` **fromSerializedBlobTxNetworkWrapper**(`serialized`, `opts?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

Creates a transaction from the network encoding of a blob transaction (with blobs/commitments/proof)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `Uint8Array` | a buffer representing a serialized BlobTransactionNetworkWrapper |
| `opts?` | [`TxOptions`](../interfaces/TxOptions.md) | any TxOptions defined |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

a BlobEIP4844Transaction

#### Defined in

[tx/src/eip4844Transaction.ts:337](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L337)

___

### fromSerializedTx

▸ `Static` **fromSerializedTx**(`serialized`, `opts?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

Instantiate a transaction from the serialized tx.

Format: `0x03 || rlp([chain_id, nonce, max_priority_fee_per_gas, max_fee_per_gas, gas_limit, to, value, data,
access_list, max_fee_per_data_gas, blob_versioned_hashes, y_parity, r, s])`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `Uint8Array` |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Defined in

[tx/src/eip4844Transaction.ts:246](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L246)

___

### fromTxData

▸ `Static` **fromTxData**(`txData`, `opts?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txData` | [`BlobEIP4844TxData`](../interfaces/BlobEIP4844TxData.md) |
| `opts?` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Defined in

[tx/src/eip4844Transaction.ts:191](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L191)

___

### fromValuesArray

▸ `Static` **fromValuesArray**(`values`, `opts?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

Create a transaction from a values array.

Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
accessList, signatureYParity, signatureR, signatureS]`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `BlobEIP4844TxValuesArray` |
| `opts` | [`TxOptions`](../interfaces/TxOptions.md) |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

#### Defined in

[tx/src/eip4844Transaction.ts:272](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L272)

___

### minimalFromNetworkWrapper

▸ `Static` **minimalFromNetworkWrapper**(`txData`, `opts?`): [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

Creates the minimal representation of a blob transaction from the network wrapper version.
The minimal representation is used when adding transactions to an execution payload/block

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txData` | [`BlobEIP4844Transaction`](BlobEIP4844Transaction.md) | a [BlobEIP4844Transaction](BlobEIP4844Transaction.md) containing optional blobs/kzg commitments |
| `opts?` | [`TxOptions`](../interfaces/TxOptions.md) | dictionary of [TxOptions](../interfaces/TxOptions.md) |

#### Returns

[`BlobEIP4844Transaction`](BlobEIP4844Transaction.md)

the "minimal" representation of a BlobEIP4844Transaction (i.e. transaction object minus blobs and kzg commitments)

#### Defined in

[tx/src/eip4844Transaction.ts:226](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/eip4844Transaction.ts#L226)
