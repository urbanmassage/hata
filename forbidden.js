var merge = require('merge');

function ForbiddenError(message, obj) {
  merge(this, obj, {
    message: message || 'Access forbidden',
    httpCode: 403,
  });
  this.constructor = ForbiddenError;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}

ForbiddenError.prototype = Error.prototype;

module.exports = ForbiddenError;
