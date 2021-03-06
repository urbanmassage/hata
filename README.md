# Hata (HTTP Errors)
[![Travis CI](https://img.shields.io/travis/urbanmassage/hata.svg)](https://travis-ci.org/urbanmassage/hata)
[![npm](https://img.shields.io/npm/v/hata.svg)](https://www.npmjs.com/package/hata)
[![npm](https://img.shields.io/npm/l/hata.svg)](https://www.npmjs.com/package/hata)
[![Codecov](https://img.shields.io/codecov/c/github/urbanmassage/hata.svg)](https://codecov.io/github/urbanmassage/hata/)
[![VersionEye](https://img.shields.io/versioneye/d/nodejs/hata.svg)](https://www.versioneye.com/nodejs/hata/)

Common HTTP errors to be used with express.js or whatever engine you use.

## The name
Hata means "error" in Arabic (and Turkish!), which is where the package name comes from.

## Features

The following error types are currently supported:
- (400) bad-request: `BadRequestError`
- (401) unauthorized: `UnauthorizedError`
- (403) forbidden: `ForbiddenError`
- (404) not-found: `NotFoundError`
- (409) conflict: `ConflictError`
- (422) unprocessable-entity: `UnprocessableEntityError`


The error object is an instance of `Error`, with the properties `name`, `message` and `stack`.

## Usage

```javascript
var NotFoundError = require('hata/not-found');

throw new NotFoundError('Product not found');
```

You can also add more properties to the error object by passing them as the second parameter.
```javascript
var NotFoundError = require('hata/not-found');

var error = new NotFoundError('Product not found', { item: 'product', id: 1, });
// error now has attributes `item` and `id`.
```

You can also use it in the following way:
```javascript
var hata = require('hata');
var error = hata(404/*, message, obj*/);
```

### Express
Just add a regular error handler like the following:
```javascript
// http://expressjs.com/guide/error-handling.html
app.use(function(err, req, res, next) { // jshint ignore:line
  return res
            .status(err.httpCode || 500)
            .header('content-type: application/json')
            .send(safeJsonStringify(err));
});
```
