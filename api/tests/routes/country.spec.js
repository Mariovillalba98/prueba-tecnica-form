/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Formulario, conn } = require('../../src/db.js');

const agent = session(app);
const formulario = {
  name: 'Milanea a la napolitana',
};

describe('Formulario routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Formulario.sync({ force: true })
    .then(() => Formulario.create(formulario)));
  describe('GET /formularios', () => {
    it('should get 200', () =>
      agent.get('/formularios').expect(200)
    );
  });
});
