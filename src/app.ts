import { dict as en } from './dicts/en.js'
import type { dictRecord, languageCode, outputContents, statusCode } from './types.js'

const dicts: Record<string, dictRecord> = { en }

export const getStatus = async (code: statusCode = 404, lang: languageCode = 'en'): Promise<outputContents> => {
  const result = {
    code,
    message: dicts[lang]?.[code]
  }

  return result
}
