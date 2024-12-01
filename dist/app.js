export const main = async (code = 404, lang = 'en') => {
    const result = {
        code,
        message: await lookUp(lang)
    };
    console.log('result: ', result);
    return result;
};
const lookUp = async (lang = 'en') => {
    const filePath = `dicts/${lang}.js`;
    const { dict } = await import(filePath);
    const result = dict[lang];
    console.log('result: ', result);
    return result;
};
