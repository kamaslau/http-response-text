import { dict as en } from './dicts/en.js'
import type { dictRecord, languageCode, outputContents, statusCode } from './types.js'

const loaders: Record<languageCode, () => Promise<dictRecord>> = {
  en: async () => en,
  ja: async () => (await import('./dicts/ja.js')).dict,
  zh: async () => (await import('./dicts/zh.js')).dict
}

const dictionaries = new Map<languageCode, dictRecord>([['en', en]])

export const getStatus = async (code: statusCode = 404, lang: languageCode = 'en'): Promise<outputContents> => {
  if (!Object.hasOwn(loaders, lang)) {
    return {
      code,
      message: undefined
    }
  }

  let dict = dictionaries.get(lang)

  if (!dict) {
    dict = await loaders[lang]()
    dictionaries.set(lang, dict)
  }

  return {
    code,
    message: dict[code]
  }
}
