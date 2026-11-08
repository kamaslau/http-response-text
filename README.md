# http-response-text

[![Publish packages to NPM](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml/badge.svg)](https://github.com/kamaslau/http-response-text/actions/workflows/publish.yml)
![npm](https://img.shields.io/npm/v/http-response-text)
![NPM Downloads](https://img.shields.io/npm/dy/http-response-text)

In-takes HTTP status code and language code (default to 'en'), spits out response object with corresponding human-readable text message.

Based on [MDN web docs for HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Supported languages: English (`en`) and Chinese (`zh`).

## Installation

- PNPM `pnpm add http-response-text`
- NPM `npm install http-response-text`

## Usage

Import the _getStatus_ method and call it with a numeric status code.

For example, the following code snippet validates a user input object id for MongoDB and return an 404 response object for non-valid payload:

```javascript
import { ObjectId } from "mongodb";
import { getStatus } from "http-response-text";

const findById = async (collectionName, id) => {
  if (!ObjectId.isValid(id)) return getStatus(404) ?? null;

  // ...
};
```

This will return an object like this:

```javascript
{
  code: 404,
  message: 'Not Found'
}
```
