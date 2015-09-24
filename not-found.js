var extend = require('util')._extend;

function NotFoundError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Item not found',
    httpCode: 404,
    constructor: NotFoundError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

NotFoundError.prototype = Error.prototype;

module.exports = NotFoundError;
