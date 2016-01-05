import {expect} from 'chai';

describe('UnauthorizedError', function() {
  var UnauthorizedError = require('../unauthorized');

  it('should be an error', function() {
    var error = new UnauthorizedError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('message').and.to.equal('Unauthorized access');
    expect(error).to.have.property('httpCode').and.to.equal(401);
    expect(error).to.have.property('stack').and.to.contain('unauthorized.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new UnauthorizedError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new UnauthorizedError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
