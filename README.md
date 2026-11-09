# http-response-text

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub top language](https://img.shields.io/github/languages/top/kamaslau/http-response-text)
![Node Current](https://img.shields.io/node/v/http-response-text)
[![Publish packages to NPM](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml/badge.svg)](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml)
![npm](https://img.shields.io/npm/v/http-response-text)
![NPM Downloads](https://img.shields.io/npm/dy/http-response-text)

In-takes HTTP status code and language code (default to 'en'), spits out response object with corresponding human-readable text message.

Based on [MDN web docs for HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Supported languages:

- English (`en`, default)
- Chinese (`zh`) — see [why Chinese uses `zh` instead of `cn`](#why-chinese-uses-zh-instead-of-cn)
- Japanese (`ja`)

## Usage

```bash
npm i http-response-text

# Or PNPM
pnpm add http-response-text
```

Import the _getStatus_ method and call it with a numeric status code and optionally the language label ("en"(default) | "zh" | "ja"). The method is async and returns a Promise; only the English dictionary is loaded at startup, other languages are imported on first use and cached.

```javascript
import { getStatus } from "http-response-text";

// Get default English
const enResponse = await getStatus(404);
// Output: { code: 404, message: 'Not Found' }

// Compare Chinese 404 response
const zhResponse = await getStatus(404, "zh");
console.log(zhResponse);
// Output: { code: 404, message: '未找到' }

// Compare Japanese 404 response
const jaResponse = await getStatus(404, "ja");
console.log(jaResponse);
// Output: { code: 404, message: '未検出' }
```

For example, the following snippet validates a user-supplied MongoDB ObjectId and returns a 404 response object for an invalid payload:

```javascript
import { getStatus } from "http-response-text";
import { ObjectId } from "mongodb";

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return await getStatus(404);

  // ...
};
```

The returned object looks like this:

```javascript
{
  code: 404,
  message: 'Not Found'
}
```

## FAQs

### Why Chinese uses `zh` instead of `cn`?

`zh` is the ISO 639-1 language code for Chinese, while `CN` is the ISO 3166-1 alpha-2 country code for China (People's Republic of China). A language code identifies a language, not a country, so `cn` alone is not a valid language identifier.

Regional variants combine both in a BCP 47 tag, such as `zh-CN` for Simplified Chinese as used in China. This package accepts only the base language code, so use `zh`:

```javascript
await getStatus(404, "zh"); // { code: 404, message: '未找到' }
await getStatus(404, "cn"); // TypeScript error; returns { code: 404, message: undefined }
```
