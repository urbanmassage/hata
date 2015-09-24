var merge = require('merge');

function NotFoundError(message, obj) {
  merge(this, obj, {
    message: message || 'Item not found',
    httpCode: 404,
  });
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}
NotFoundError.prototype = Error.prototype;

module.exports = NotFoundError;
