export const getStatus = async (code: statusCode = 404, lang: languageCode = 'en'): Promise<outputContents> => {
  const result = {
    code,
    message: await lookUp(lang)
  }

  console.log('result: ', result)
  return result
}

const lookUp = async (lang: languageCode = 'en'): Promise<statusMessage> => {
  const filePath = `dicts/${lang}.js`
  const { dict } = await import(filePath)
  const result = dict[lang] ?? 'Un-known status code'

  console.log('result: ', result)
  return result
}
