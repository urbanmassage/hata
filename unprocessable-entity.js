var extend = require('util')._extend;

function UnprocessableEntityError(message, obj) {
  extend(this, obj);
  extend(this, {
    message: message || 'Unprocessable entity',
    httpCode: 422,
    constructor: UnprocessableEntityError,
    name: this.constructor.name,
  });
  Error.captureStackTrace(this, this.constructor);
}

UnprocessableEntityError.prototype = Error.prototype;

module.exports = UnprocessableEntityError;
