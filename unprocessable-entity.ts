import HataError = require('./hata');

class UnprocessableEntityError<T> extends HataError<T> {
  httpCode = 422;
  name = 'UnprocessableEntityError';
  constructor(message: string = 'Unprocessable entity', obj?: T) {super(message, obj);}
}

export = UnprocessableEntityError;
