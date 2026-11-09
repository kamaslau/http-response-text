import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  globalIgnores(['dist/', 'node_modules/']),

  js.configs.recommended,

  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    rules: {
      'no-undef': 'off', // Handled by TypeScript itself
      'no-unused-vars': 'off', // Superseded by the TypeScript-aware variant
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
)
