const authRouter = require('../router/authRouter');

describe('authRouter', () => {
  it('POST /api/login responds with 200', () => {
    return supertest(authRouter)
      .post('/api/login')
      .expect(200);
  });
});