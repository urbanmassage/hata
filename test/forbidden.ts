import {expect} from 'chai';

describe('ForbiddenError', function() {
  var ForbiddenError = require('../forbidden');

  it('should be an error', function() {
    var error = new ForbiddenError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('httpCode').and.to.equal(403);
    expect(error).to.have.property('stack').and.to.contain('forbidden.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new ForbiddenError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new ForbiddenError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
