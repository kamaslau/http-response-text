# http-response-text

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub top language](https://img.shields.io/github/languages/top/kamaslau/http-response-text)
![Node Current](https://img.shields.io/node/v/http-response-text)
[![Publish packages to NPM](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml/badge.svg)](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml)
![npm](https://img.shields.io/npm/v/http-response-text)
![NPM Downloads](https://img.shields.io/npm/dy/http-response-text)

In-takes HTTP status code and language code (default to 'en'), spits out response object with corresponding human-readable text message.

Based on [MDN web docs for HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## Supported Languages

- English (`en`, default)
- Chinese (`zh`) — see [why Chinese uses `zh` instead of `cn`](#why-chinese-uses-zh-instead-of-cn)
- Japanese (`ja`)

## Usage

```bash
npm i http-response-text

# Or PNPM
pnpm add http-response-text
```

Import the `getStatus` method and call it with a numeric status code and, optionally, a language code string — `"en"` (default), `"zh"` or `"ja"`.

The method is async, so `await` its Promise; the examples below use top-level `await` inside an ES module. Only the English dictionary is loaded at startup, while other languages are imported on first use and cached.

```javascript
import { getStatus } from "http-response-text";

// Full output for 404 in the default language (English)
const result = await getStatus(404);
console.log(result);
// Output: { code: 404, message: 'Not Found' }

// Only get message for 404 in Chinese
const { message } = await getStatus(404, "zh");
console.log(message);
// Output: 未找到

// Only get message for 404 in Japanese, and rename to jaMessage
const { message: jaMessage } = await getStatus(404, "ja");
console.log(jaMessage);
// Output: 未検出
```

For example, the snippet below rejects a user-supplied identifier that is not a valid MongoDB ObjectId before querying the database:

```javascript
import { getStatus } from "http-response-text";
import { ObjectId } from "mongodb";

const findById = async (collectionName, id) => {
  if (!ObjectId.isValid(id)) {
    const { code, message } = await getStatus(401);
    console.warn(
      `findById(${collectionName}): invalid ObjectId "${String(id)}" (${code} ${message})`,
    );

    return null;
  }

  // ...
};
```

When the function is a request handler, reply with `404` instead of `401`. A malformed identifier then gets the same response as a missing record, so an attacker cannot probe endpoints to enumerate valid identifiers:

```javascript
if (!ObjectId.isValid(id)) return await getStatus(404);
```

## Credited by

- [The Nobel Prize Press](https://www.nobelpress.org/credits#:~:text=http-response-text) — lists **http-response-text** among the open-source software it credits.

## FAQs

### Why Chinese uses `zh` instead of `cn`?

`zh` is the ISO 639-1 language code for Chinese, while `CN` is the ISO 3166-1 alpha-2 country code for China (People's Republic of China). A language code identifies a language, not a country, so `cn` alone is not a valid language identifier.

Regional variants combine both in a BCP 47 tag, such as `zh-CN` for Simplified Chinese as used in China. This package accepts only the base language code, so use `zh`:

```javascript
await getStatus(404, "zh"); // { code: 404, message: '未找到' }
await getStatus(404, "cn"); // TypeScript error; returns { code: 404, message: undefined }
```
