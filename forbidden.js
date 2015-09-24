var extend = require('util')._extend;

function ForbiddenError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Access forbidden',
    httpCode: 403,
    constructor: ForbiddenError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

ForbiddenError.prototype = Error.prototype;

module.exports = ForbiddenError;
