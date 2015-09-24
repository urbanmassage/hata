var merge = require('merge');

function UnauthorizedError(message, obj) {
  merge(this, obj, {
    message: message || 'Unauthorized access',
    httpCode: 403,
  });
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}
UnauthorizedError.prototype = Error.prototype;

module.exports = UnauthorizedError;
