# http-response-text

In-takes HTTP status code and language code (default to 'en'), spits out response object with corresponding human-readable text message.

Based on [MDN web docs for HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## Usage

Install this package with `pnpm add http-response-text` (or `npm install http-response-text` if you prefer), then just import the _getStatus_ method and pass in the status code. For example, the following code snippet validates a user input object id for MongoDB and return an 404 response object for non-valid payload:

```javascript
import { MongoClient, ObjectId } from "mongodb";
import { getStatus } from "http-response-text";

const findById = async (collectionName, id) => {
  // console.log("findById: ", collectionName, id);
  if (!ObjectId.isValid(id)) return getStatus(404) ?? null;

  // ...
};
```
