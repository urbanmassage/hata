var extend = require('util')._extend;

function ConflictError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Item conflicts with another item',
    httpCode: 409,
    constructor: ConflictError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

ConflictError.prototype = Error.prototype;

module.exports = ConflictError;
