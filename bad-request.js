var extend = require('util')._extend;

function BadRequestError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Bad request',
    httpCode: 400,
    constructor: BadRequestError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

BadRequestError.prototype = Error.prototype;

module.exports = BadRequestError;
