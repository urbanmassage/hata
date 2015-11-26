var expect = require('chai').expect;

describe('ConflictError', function() {
  var ConflictError = require('../conflict');

  it('should be an error', function() {
    var error = new ConflictError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('httpCode').and.to.equal(409);
    expect(error).to.have.property('stack').and.to.contain('conflict.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new ConflictError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new ConflictError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
