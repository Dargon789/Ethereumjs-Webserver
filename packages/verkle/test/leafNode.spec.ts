import { equalsBytes, randomBytes } from '@ethereumjs/util'
import { assert, describe, it } from 'vitest'

import { VerkleNodeType } from '../src/node/index.js'
import { LeafNode } from '../src/node/leafNode.js'

import type { Point } from '../src/types.js'

describe('verkle node - leaf', () => {
  it('constructor should create an leaf node', async () => {
    const commitment = randomBytes(32)
    const c1 = randomBytes(32)
    const c2 = randomBytes(32)
    const stem = randomBytes(32)
    const values = [randomBytes(32), randomBytes(32)]
    const depth = 2
    const node = new LeafNode({
      c1: c1 as unknown as Point,
      c2: c2 as unknown as Point,
      commitment: commitment as unknown as Point,
      depth,
      stem,
      values,
    })

    assert.equal(node.type, VerkleNodeType.Leaf, 'type should be set')
    assert.ok(
      equalsBytes(node.commitment as unknown as Uint8Array, commitment),
      'commitment should be set'
    )
    assert.ok(equalsBytes(node.c1 as unknown as Uint8Array, c1), 'c1 should be set')
    assert.ok(equalsBytes(node.c2 as unknown as Uint8Array, c2), 'c2 should be set')
    assert.ok(equalsBytes(node.stem, stem), 'stem should be set')
    assert.ok(
      values.every((value, index) => equalsBytes(value, node.values[index])),
      'values should be set'
    )
    assert.equal(node.depth, depth, 'depth should be set')
  })

  it.todo('create method should create an leaf node')
})
