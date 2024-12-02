// Informational responses (100 – 199)
type statusInformational = 100 | 101 | 102 | 103
// Successful responses (200 – 299)
type statusSuccessful = 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226
// Redirection messages (300 – 399)
type statusRedirection = 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308
// Client error responses (400 – 499)
type statusClientError = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451
// Server error responses (500 – 599)
type statusServerError = 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511

type statusCode = number | statusInformational | statusSuccessful | statusRedirection | statusClientError | statusServerError
type statusMessage = string

type languageCode = string | 'en' | 'zh'

type inputParams = {
  code: statusCode;
  lang?: languageCode;
}

type outputContents = {
  code: statusCode;
  message: statusMessage;
}

type dictRecord = Record<number, string>
