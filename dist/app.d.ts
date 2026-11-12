import type { languageCode, outputContents, statusCode } from './types.js';
/**
 * Lists all available languages, i.e. every language that ships with a dictionary file.
 * @returns A de-duplicated set of language codes.
 */
export declare const listLanguages: () => Promise<Set<languageCode>>;
export declare const getStatus: (code?: statusCode, lang?: languageCode) => Promise<outputContents>;
