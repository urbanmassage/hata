import HataError = require('./hata');

class UnauthorizedError<T> extends HataError<T> {
  httpCode = 401;
  name = 'UnauthorizedError';
  constructor(message: string = 'Unauthorized access', obj?: T) {super(message, obj);}
}

export = UnauthorizedError;
