import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './packages/trie/vitest.config.browser.ts',
  './packages/wallet/vitest.config.browser.ts',
  './packages/vm/vitest.browser.config.mts',
  './packages/rlp/vitest.config.browser.ts',
  './packages/rlp/vitest.browser.config.mts',
  './packages/util/vitest.config.browser.ts',
  './packages/verkle/vitest.config.browser.ts',
  './packages/statemanager/vitest.config.browser.ts',
  './packages/statemanager/vitest.browser.config.mts',
  './packages/tx/vitest.config.browser.ts',
  './packages/tx/vitest.browser.config.mts',
  './packages/evm/vitest.config.browser.ts',
  './packages/client/vitest.config.unit.ts',
  './packages/block/vitest.config.browser.ts',
  './config/vitest.browser.config.mts',
])
