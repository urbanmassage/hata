function hasProp(obj: Object, prop: string) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

class HataError<T> extends Error {
  name: string = 'UnknownError';
  message: string = 'Unknown error';
  httpCode: number = 500;

  constructor(message?: string, obj: T = <T>{}) {
    super(message);
    if (message) this.message = message;

    if (obj) {
      Object.keys(obj).forEach(key => {
        if (key && !this[key] && hasProp(obj, key)) this[key] = obj[key];
      });
    }

    (<any>Error).captureStackTrace(this, this.constructor);
  }
}

export = HataError;
