[@ethereumjs/vm](../README.md) / RunTxOpts

# Interface: RunTxOpts

Options for the `runTx` method.

## Table of contents

### Properties

- [block](RunTxOpts.md#block)
- [blockGasUsed](RunTxOpts.md#blockgasused)
- [reportAccessList](RunTxOpts.md#reportaccesslist)
- [skipBalance](RunTxOpts.md#skipbalance)
- [skipBlockGasLimitValidation](RunTxOpts.md#skipblockgaslimitvalidation)
- [skipHardForkValidation](RunTxOpts.md#skiphardforkvalidation)
- [skipNonce](RunTxOpts.md#skipnonce)
- [tx](RunTxOpts.md#tx)

## Properties

### block

• `Optional` **block**: `Block`

The `@ethereumjs/block` the `tx` belongs to.
If omitted, a default blank block will be used.

#### Defined in

[vm/src/types.ts:322](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L322)

___

### blockGasUsed

• `Optional` **blockGasUsed**: `bigint`

To obtain an accurate tx receipt input the block gas used up until this tx.

#### Defined in

[vm/src/types.ts:363](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L363)

___

### reportAccessList

• `Optional` **reportAccessList**: `boolean`

If true, adds a generated EIP-2930 access list
to the `RunTxResult` returned.

Option works with all tx types. EIP-2929 needs to
be activated (included in `berlin` HF).

Note: if this option is used with a custom StateManager implementation
StateManager.generateAccessList must be implemented.

#### Defined in

[vm/src/types.ts:358](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L358)

___

### skipBalance

• `Optional` **skipBalance**: `boolean`

Skip balance checks if true. Adds transaction cost to balance to ensure execution doesn't fail.

#### Defined in

[vm/src/types.ts:334](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L334)

___

### skipBlockGasLimitValidation

• `Optional` **skipBlockGasLimitValidation**: `boolean`

If true, skips the validation of the tx's gas limit
against the block's gas limit.

#### Defined in

[vm/src/types.ts:340](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L340)

___

### skipHardForkValidation

• `Optional` **skipHardForkValidation**: `boolean`

If true, skips the hardfork validation of vm, block
and tx

#### Defined in

[vm/src/types.ts:346](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L346)

___

### skipNonce

• `Optional` **skipNonce**: `boolean`

If true, skips the nonce check

#### Defined in

[vm/src/types.ts:330](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L330)

___

### tx

• **tx**: `TypedTransaction`

An `@ethereumjs/tx` to run

#### Defined in

[vm/src/types.ts:326](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/vm/src/types.ts#L326)
