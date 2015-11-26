import HataError = require('./hata');

class ForbiddenError<T> extends HataError<T> {
  httpCode = 403;
  name = 'ForbiddenError';
  constructor(message: string = 'Access forbidden', obj?: T) {super(message, obj);}
}

export = ForbiddenError;
