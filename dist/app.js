import { dict as en } from './dicts/en.js';
let dicts = { en };
export const getStatus = async (code = 404, lang = 'en') => {
    const result = {
        code,
        message: dicts[lang]?.[code]
    };
    return result;
};
