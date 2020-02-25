const knex = require('knex')
const app = require('../src/app')
const bcrypt = require('bcryptjs')

describe.only('authRouter POST endpoint', function() {
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

  beforeEach('insert users', () => {
    const newUser = {
      user_name: 'Iamatestuser',
      user_pass: 'Iamatestpass123!',
    }
    newPass = bcrypt.hashSync(newUser.user_pass, 1)
    newUser.user_pass = newPass
    db.into('userlogin').insert(newUser)
  })

  describe('authRouter', () => {
    it('POST /api/login responds with 200', () => {
      const userValidCreds  = {"user_name":"Iamatestuser","user_pass":"Iamatestpass123!"}
      return supertest(app)
        .post('/api/login')
        .send(userValidCreds)
        .expect(200)
    })
  })
})