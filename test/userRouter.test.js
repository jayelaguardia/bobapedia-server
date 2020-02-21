const userRouter = require('../router/userRouter');

describe('userRouter', () => {
  it('POST /api/users responds with 200', () => {
    return supertest(userRouter)
      .post('/api/users')
      .expect(200);
  });
});