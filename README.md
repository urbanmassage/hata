# HTTP Errors
Common HTTP errors to be used with express.js or whatever engine you use.

## Features

The following error types are currently supported:
- (401) unauthorized: `UnauthorizedError` 
- (403) forbidden: `ForbiddenError`
- (404) not-found: `NotFoundError`


The error object is an instance of `Error`, with the properties `name`, `message` and `stack`.

## Usage

    var NotFoundError = require('http-errors/not-found');

    throw new NotFoundError('Product not found');

You can also add more properties to the error object by passing them as the second parameter.

    var NotFoundError = require('http-errors/not-found');

    var error = new NotFoundError('Product not found', { item: 'product', id: 1, });
    // error now has attributes `item` and `id`.
    
### Express
Just add a regular error handler like the following:

    // http://expressjs.com/guide/error-handling.html
    app.use(function(err, req, res, next) { // jshint ignore:line
      return res
                .status(err.httpCode || 500)
                .header('content-type: application/json')
                .send(safeJsonStringify(err));
    });
