import assert from 'node:assert/strict'
import { test } from 'node:test'

import { dict as en } from '../src/dicts/en.ts'

// Languages other than the reference one. Kept as a literal so that a dictionary
// added to `src/dicts/` without being listed here has to be noticed by a human.
const otherLanguages = ['de', 'es', 'fr', 'ja', 'zh'] as const

const statusCodes = (dict: Record<number, string>): number[] =>
  Object.keys(dict).map(Number).sort((a, b) => a - b)

test('every dictionary covers exactly the same status codes as the English one', async () => {
  const expected = statusCodes(en)

  for (const language of otherLanguages) {
    const { dict } = await import(`../src/dicts/${language}.ts`)

    assert.deepEqual(statusCodes(dict), expected, `"${language}" does not match "en"`)
  }
})
