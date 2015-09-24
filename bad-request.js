var merge = require('merge');

function BadRequestError(message, obj) {
  merge(this, obj, {
    message: message || 'Bad request',
    httpCode: 400,
  });
  this.constructor = BadRequestError;
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
}
BadRequestError.prototype = Error.prototype;

module.exports = BadRequestError;
