import { dict as en } from './dicts/en.js';
const loaders = {
    en: async () => en,
    ja: async () => (await import('./dicts/ja.js')).dict,
    zh: async () => (await import('./dicts/zh.js')).dict
};
const dictionaries = new Map([['en', en]]);
export const getStatus = async (code = 404, lang = 'en') => {
    const load = loaders[lang];
    if (!load) {
        return {
            code,
            message: undefined
        };
    }
    let dict = dictionaries.get(lang);
    if (!dict) {
        dict = await load();
        dictionaries.set(lang, dict);
    }
    return {
        code,
        message: dict[code]
    };
};
