var extend = require('util')._extend;

var BadRequestError = require('./bad-request');
var UnauthorizedError = require('./unauthorized');
var ForbiddenError = require('./forbidden');
var NotFoundError = require('./not-found');
var ConflictError = require('./conflict');
var UnprocessableEntityError = require('./unprocessable-entity');

function hata(code, message, obj) {
  if ('string' === typeof code) {
    code = code.toLowerCase().replace(/[^a-z0-9]+/g, '');
  }
  switch(code) {
    case 400:
    case 'badrequest':
      return new BadRequestError(message, obj);
    case 401:
    case 'unauthorized':
      return new UnauthorizedError(message, obj);
    case 403:
    case 'forbidden':
      return new ForbiddenError(message, obj);
    case 404:
    case 'notfound':
      return new NotFoundError(message, obj);
    case 409:
    case 'conflict':
      return new ConflictError(message, obj);
    case 422:
    case 'unprocessableentity':
      return new UnprocessableEntityError(message, obj);
    default:
      var error = new Error(message);
      error.code = error;
      extend(error, obj);
      return error;
  }
}

module.exports = hata;
