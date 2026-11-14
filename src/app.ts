import { dict as en } from './dicts/en.js'
import type { dictRecord, languageCode, outputContents, statusCode } from './types.js'

const loaders: Record<languageCode, () => Promise<dictRecord>> = {
  en: async () => en,
  de: async () => (await import('./dicts/de.js')).dict,
  fr: async () => (await import('./dicts/fr.js')).dict,
  ja: async () => (await import('./dicts/ja.js')).dict,
  zh: async () => (await import('./dicts/zh.js')).dict
}

const dictionaries = new Map<languageCode, dictRecord>([['en', en]])

// Every key of `loaders` maps to an existing dictionary module, so its keys are the
// authoritative list of languages shipped with this package.
const supportedLanguages = Object.keys(loaders) as languageCode[]

/**
 * Lists all available languages, i.e. every language that ships with a dictionary file.
 * @returns A de-duplicated set of language codes.
 */
export const listLanguages = async (): Promise<Set<languageCode>> => new Set(supportedLanguages)

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
