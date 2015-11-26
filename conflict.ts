import HataError = require('./hata');

class ConflictError<T> extends HataError<T> {
  httpCode = 409;
  name = 'ConflictError';
  constructor(message: string = 'Item conflicts with another item', obj?: T) {super(message, obj);}
}

export = ConflictError;
