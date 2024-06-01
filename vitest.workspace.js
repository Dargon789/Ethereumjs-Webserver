import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([

  './packages/evm/vitest.config.browser.ts',
  './packages/client/vitest.config.unit.ts',
  './packages/block/vitest.config.browser.ts',
  './config/vitest.browser.config.mts',
])
