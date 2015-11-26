import HataError = require('./hata');

class NotFoundError<T> extends HataError<T> {
  httpCode = 404;
  name = 'NotFoundError';
  constructor(message: string = 'Item not found', obj?: T) {super(message, obj);}
}

export = NotFoundError;
