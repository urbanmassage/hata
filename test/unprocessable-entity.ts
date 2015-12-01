import {expect} from 'chai';

describe('UnprocessableEntityError', function() {
  var UnprocessableEntityError = require('../unprocessable-entity');

  it('should be an error', function() {
    var error = new UnprocessableEntityError();

    expect(error).to.be.an.instanceOf(Error);
    expect(error).to.have.property('httpCode').and.to.equal(422);
    expect(error).to.have.property('stack').and.to.contain('unprocessable-entity.js');
  });

  it('should support message', function() {
    var msg = 'test';
    var error = new UnprocessableEntityError(msg);

    expect(error).to.have.property('message').and.to.equal(msg);
  });

  it('should support custom properties', function() {
    var error = new UnprocessableEntityError('test', { test1: true });

    expect(error).to.have.property('test1').and.to.equal(true);
  });
});
