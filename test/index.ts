import {expect} from 'chai';

import hata = require('../index');

import BadRequestError = require('../bad-request');
import UnauthorizedError = require('../unauthorized');
import ForbiddenError = require('../forbidden');
import NotFoundError = require('../not-found');
import ConflictError = require('../conflict');
import UnprocessableEntityError = require('../unprocessable-entity');

describe('hata', function() {
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

  it('should work with unsupported codes', function() {
    expect(() => hata('unknown')).to.throw(Error);
    expect(hata(500)).to.be.an.instanceOf(Error).and.to.have.property('httpCode');
  });
});
