const knex = require('knex')
const app = require('../src/app')

describe('userRouter', () => {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE TABLE userlogin CASCADE'))

  afterEach('cleanup',() => db.raw('TRUNCATE TABLE userlogin CASCADE'))

  it('POST /api/users responds with 200', () => {
    const newUser = {
      user_name: 'Iamatestuser',
      user_pass: 'Iamatestpass123!',
    }
    return supertest(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);
  });
});