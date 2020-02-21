const creationRouter = require('../router/creationRouter');

describe('creationRouter', () => {
  it('GET /api/creation responds with 200', () => {
    return supertest(creationRouter)
      .GET('/api/creation')
      .expect(200);
  });
  it('GET /api/creation/:creation_id responds with 200', () => {
    return supertest(classicRouter)
      .get('/api/creation/1')
      .expect(200);
  });
});