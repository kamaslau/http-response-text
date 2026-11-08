import { dict as en } from './dicts/en.js';
import { dict as zh } from './dicts/zh.js';
const dicts = { en, zh };
export const getStatus = async (code = 404, lang = 'en') => {
    const result = {
        code,
        message: dicts[lang]?.[code]
    };
    return result;
};
