import { dict as en } from './dicts/en.js';
const dicts = { en };
export const getStatus = async (code = 404, lang = 'en') => {
    const result = {
        code,
        message: dicts[lang]?.[code]
    };
    return result;
};
