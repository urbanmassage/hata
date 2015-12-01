import {expect} from 'chai';

import hata = require('../index');

describe('hata', function() {
  it('should work with numeric codes', function() {
    expect(hata(400)).to.be.an.instanceOf(hata.BadRequestError);
    expect(hata(401)).to.be.an.instanceOf(hata.UnauthorizedError);
    expect(hata(403)).to.be.an.instanceOf(hata.ForbiddenError);
    expect(hata(404)).to.be.an.instanceOf(hata.NotFoundError);
    expect(hata(409)).to.be.an.instanceOf(hata.ConflictError);
    expect(hata(422)).to.be.an.instanceOf(hata.UnprocessableEntityError);
  });

  it('should work with string codes', function() {
    expect(hata('BadRequest')).to.be.an.instanceOf(hata.BadRequestError);
    expect(hata('Unauthorized')).to.be.an.instanceOf(hata.UnauthorizedError);
    expect(hata('Forbidden')).to.be.an.instanceOf(hata.ForbiddenError);
    expect(hata('NotFound')).to.be.an.instanceOf(hata.NotFoundError);
    expect(hata('Conflict')).to.be.an.instanceOf(hata.ConflictError);
    expect(hata('UnprocessableEntity')).to.be.an.instanceOf(hata.UnprocessableEntityError);
  });

  it('should work with unsupported codes', function() {
    expect(() => hata('unknown')).to.throw(Error);
    expect(hata(500)).to.be.an.instanceOf(Error).and.to.have.property('httpCode').that.equals(500);
  });
});
