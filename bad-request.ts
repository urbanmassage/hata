import HataError = require('./hata');

class BadRequestError<T> extends HataError<T> {
  httpCode = 400;
  name = 'BadRequestError';
  constructor(message: string = 'Bad request', obj?: T) {super(message, obj);}
}

export = BadRequestError;
