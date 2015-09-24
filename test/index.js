var expect = require('chai').expect;

describe('hata', function() {
  var hata = require('..');

  var BadRequestError = require('../bad-request');
  var UnauthorizedError = require('../unauthorized');
  var ForbiddenError = require('../forbidden');
  var NotFoundError = require('../not-found');
  var ConflictError = require('../conflict');
  var UnprocessableEntityError = require('../unprocessable-entity');

  it('should work with numeric codes', function() {
    expect(hata(400)).to.be.an.instanceOf(BadRequestError);
    expect(hata(401)).to.be.an.instanceOf(UnauthorizedError);
    expect(hata(403)).to.be.an.instanceOf(ForbiddenError);
    expect(hata(404)).to.be.an.instanceOf(NotFoundError);
    expect(hata(409)).to.be.an.instanceOf(ConflictError);
    expect(hata(422)).to.be.an.instanceOf(UnprocessableEntityError);
  });

  it('should work with string codes', function() {
    expect(hata('BadRequest')).to.be.an.instanceOf(BadRequestError);
    expect(hata('Unauthorized')).to.be.an.instanceOf(UnauthorizedError);
    expect(hata('Forbidden')).to.be.an.instanceOf(ForbiddenError);
    expect(hata('NotFound')).to.be.an.instanceOf(NotFoundError);
    expect(hata('Conflict')).to.be.an.instanceOf(ConflictError);
    expect(hata('UnprocessableEntity')).to.be.an.instanceOf(UnprocessableEntityError);
  });

  it('should work with invalid codes', function() {
    expect(hata('unknown')).to.be.an.instanceOf(Error).and.to.have.property('code');
  });
});
