var expect = require('chai').expect;

describe('NotFoundError', function() {
  var NotFoundError = require('../not-found');

  it('should be an error', function() {
    var error = new NotFoundError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('httpCode').and.to.equal(404);
    expect(error).to.have.property('stack').and.to.contain('not-found.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new NotFoundError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new NotFoundError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
