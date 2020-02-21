const optionsRouter = require('../router/optionsRouter');

describe('optionsRouter', () => {
  it('GET /api/tea responds with 200', () => {
    return supertest(optionsRouter)
      .get('/api/tea')
      .expect(200);
  });
  it('GET /api/flavor responds with 200', () => {
    return supertest(optionsRouter)
      .get('/api/flavor')
      .expect(200);
  });
  it('GET /api/addons responds with 200', () => {
    return supertest(optionsRouter)
      .get('/api/addons')
      .expect(200);
  });
  it('GET /api/milk responds with 200', () => {
    return supertest(optionsRouter)
      .get('/api/milk')
      .expect(200);
  });
  it('GET /api/sweetener responds with 200', () => {
    return supertest(optionsRouter)
      .get('/api/sweetener')
      .expect(200);
  });
});