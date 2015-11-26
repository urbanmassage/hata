import BadRequestError = require('./bad-request');
import UnauthorizedError = require('./unauthorized');
import ForbiddenError = require('./forbidden');
import NotFoundError = require('./not-found');
import ConflictError = require('./conflict');
import UnprocessableEntityError = require('./unprocessable-entity');
import HataError = require('./hata');

function hata<T>(code: number | string, message: string, obj: T);
function hata<T>(code: any, message: string = '', obj: T = <T>{}) {
  if ('string' === typeof code) {
    code = (<string>code).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  switch (code) {
    case 400:
    case 'badrequest':
      return new BadRequestError<T>(message, obj);
    case 401:
    case 'unauthorized':
      return new UnauthorizedError<T>(message, obj);
    case 403:
    case 'forbidden':
      return new ForbiddenError<T>(message, obj);
    case 404:
    case 'notfound':
      return new NotFoundError<T>(message, obj);
    case 409:
    case 'conflict':
      return new ConflictError<T>(message, obj);
    case 422:
    case 'unprocessableentity':
      return new UnprocessableEntityError<T>(message, obj);
    default:
      const error = new HataError(message, obj);
      const httpCode = parseInt(code + '', 10);
      if (!isNaN(httpCode)) {
        error.httpCode = httpCode;
      } else if(code) {
        throw new Error('Unknown error code: ' + code);
      }
      return error;
  }
}

export = hata;
