import { dict as en } from './dicts/en.js'

let dicts = { en }

export const getStatus = async (code: statusCode = 404, lang: languageCode = 'en'): Promise<outputContents> => {
  const result = {
    code,
    message: dicts[lang]?.[code]
  }

  return result
}
