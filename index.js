var ForbiddenError = require('./forbidden');
var UnauthorizedError = require('./unauthorized');
var NotFoundError = require('./not-found');

module.exports = {
  ForbiddenError: ForbiddenError,
  UnauthorizedError: UnauthorizedError,
  NotFoundError: NotFoundError,
};
