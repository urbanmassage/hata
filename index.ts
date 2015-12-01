import BadRequest = require('./bad-request');
import Unauthorized = require('./unauthorized');
import Forbidden = require('./forbidden');
import NotFound = require('./not-found');
import Conflict = require('./conflict');
import UnprocessableEntity = require('./unprocessable-entity');
import Hata = require('./hata');

function hata(code: number | string, message?: string): Hata<{}>;
function hata<T>(code: number | string, message: string, obj: T): Hata<T>;
function hata<T>(code: any, message: string = '', obj?: T): Hata<T> {
  if ('string' === typeof code) {
    code = (<string>code).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  switch (code) {
    case 400:
    case 'badrequest':
      return new BadRequest<T>(message, obj);
    case 401:
    case 'unauthorized':
      return new Unauthorized<T>(message, obj);
    case 403:
    case 'forbidden':
      return new Forbidden<T>(message, obj);
    case 404:
    case 'notfound':
      return new NotFound<T>(message, obj);
    case 409:
    case 'conflict':
      return new Conflict<T>(message, obj);
    case 422:
    case 'unprocessableentity':
      return new UnprocessableEntity<T>(message, obj);
    default:
      const error = new Hata(message, obj);
      const httpCode = parseInt(code + '', 10);
      if (!isNaN(httpCode)) {
        error.httpCode = httpCode;
      } else if(code) {
        throw new Error('Unknown error code: ' + code);
      }
      return error;
  }
}

namespace hata {
  export var BadRequestError = BadRequest;
  export var UnauthorizedError = Unauthorized;
  export var ForbiddenError = Forbidden;
  export var NotFoundError = NotFound;
  export var ConflictError = Conflict;
  export var UnprocessableEntityError = UnprocessableEntity;
  export var HataError = Hata;
}

export = hata;
