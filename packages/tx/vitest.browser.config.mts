
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '../../config/vitest.browser.config.mts'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      exclude: [
        ...configDefaults.exclude,
        // default export for minimist
        // wrong ethereum-tests path reference (../ is stripped)
        'test/transactionRunner.spec.ts',
      ],
    },
  })
)