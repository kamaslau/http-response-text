# http-response-text

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub top language](https://img.shields.io/github/languages/top/kamaslau/http-response-text)
![Node Current](https://img.shields.io/node/v/http-response-text)
[![Publish packages to NPM](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml/badge.svg)](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml)
![npm](https://img.shields.io/npm/v/http-response-text)
![NPM Downloads](https://img.shields.io/npm/dy/http-response-text)

In-takes HTTP status code and language code (default to 'en'), spits out response object with corresponding human-readable text message.

Based on [MDN web docs for HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Supported languages: English (`en`) and Chinese (`zh`).

## Usage

```bash
npm i http-response-text

# Or PNPM
pnpm add http-response-text
```

Import the _getStatus_ method and call it with a numeric status code and optionally the language label ("en"(default)|"zh").

```javascript
import { getStatus } from "http-response-text";

// Get default English
const enResponse = getStatus(404);
// Output: { code: 404, message: 'Not Found' }

// Compare Chinese 404 response
const zhResponse = getStatus(404, "zh");
console.log(zhResponse);
// Output: { code: 404, message: '未找到' }
```

For example, the following code snippet validates a user input MongoDB ObjectId and return an 404 response object for non-valid payload:

```javascript
import { getStatus } from "http-response-text";
import { ObjectId } from "mongodb";

const findById = async (collectionName, id) => {
  if (!ObjectId.isValid(id)) return getStatus(404);

  // ...
};
```

The returned object in this will be:

```javascript
{
  code: 404,
  message: 'Not Found'
}
```
