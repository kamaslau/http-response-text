import type { languageCode, outputContents, statusCode } from './types.js';
export declare const getStatus: (code?: statusCode, lang?: languageCode) => Promise<outputContents>;
