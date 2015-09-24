var merge = require('merge');

function ConflictError(message, obj) {
  merge(this, obj, {
    message: message || 'Item conflicts with another item',
    httpCode: 409,
  });
  this.constructor = ConflictError;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}
ConflictError.prototype = Error.prototype;

module.exports = ConflictError;
