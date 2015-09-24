var extend = require('util')._extend;

function UnauthorizedError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Unauthorized access',
    httpCode: 401,
    constructor: UnauthorizedError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

UnauthorizedError.prototype = Error.prototype;

module.exports = UnauthorizedError;
