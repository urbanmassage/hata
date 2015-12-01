import {expect} from 'chai';

describe('BadRequestError', function() {
  var BadRequestError = require('../bad-request');

  it('should be an error', function() {
    var error = new BadRequestError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('httpCode').and.to.equal(400);
    expect(error).to.have.property('stack').and.to.contain('bad-request.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new BadRequestError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new BadRequestError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
