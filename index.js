var UnauthorizedError = require('./unauthorized');
var ForbiddenError = require('./forbidden');
var NotFoundError = require('./not-found');
var ConflictError = require('./conflict');

function hata(code, message, obj) {
  if ('string' === typeof code) {
    code = code.toLowerCase().replace(/[^a-z0-9]+/g, '');
  }
  switch(code) {
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
  }
}

module.exports = hata;
