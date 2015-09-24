var merge = require('merge');

function UnprocessableEntityError(message, obj) {
  merge(this, obj, {
    message: message || 'Unprocessable entity',
    httpCode: 422,
  });
  this.constructor = UnprocessableEntityError;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}
UnprocessableEntityError.prototype = Error.prototype;

module.exports = UnprocessableEntityError;
