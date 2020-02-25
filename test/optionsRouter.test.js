const knex = require('knex')
const app = require('../src/app')

describe('optionsRouter', () => {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  it('GET /api/tea responds with 200', () => {
    return supertest(app)
      .get('/api/tea')
      .expect(200);
  });
  it('GET /api/flavor responds with 200', () => {
    return supertest(app)
      .get('/api/flavor')
      .expect(200);
  });
  it('GET /api/addons responds with 200', () => {
    return supertest(app)
      .get('/api/addons')
      .expect(200);
  });
  it('GET /api/milk responds with 200', () => {
    return supertest(app)
      .get('/api/milk')
      .expect(200);
  });
  it('GET /api/sweetener responds with 200', () => {
    return supertest(app)
      .get('/api/sweetener')
      .expect(200);
  });
});