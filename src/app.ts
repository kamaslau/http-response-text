import { dict as en } from './dicts/en.js'
import type { dictRecord, languageCode, outputContents, statusCode } from './types.js'

const loaders: Partial<Record<languageCode, () => Promise<dictRecord>>> = {
  en: async () => en,
  zh: async () => (await import('./dicts/zh.js')).dict
}

const dictionaries = new Map<languageCode, dictRecord>([['en', en]])

export const getStatus = async (code: statusCode = 404, lang: languageCode = 'en'): Promise<outputContents> => {
  const load = loaders[lang]

  if (!load) {
    return {
      code,
      message: undefined
    }
  }

  let dict = dictionaries.get(lang)

  if (!dict) {
    dict = await load()
    dictionaries.set(lang, dict)
  }

  return {
    code,
    message: dict[code]
  }
}
