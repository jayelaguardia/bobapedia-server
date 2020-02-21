const classicRouter = require('../router/classicRouter');

describe('classicRouter', () => {
  it('GET /api/classic responds with 200', () => {
    return supertest(classicRouter)
      .get('/api/classic')
      .expect(200);
  });

  it('GET /api/classic/:classic_id responds with 200', () => {
    return supertest(classicRouter)
      .get('/api/classic/1')
      .expect(200);
  });
});