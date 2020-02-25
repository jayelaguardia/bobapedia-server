const knex = require('knex')
const app = require('../src/app')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

describe('creationRouter', () => {
  let db
  let newUser

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
    
    newUser = {
      id: 123,
      user_name: 'Iamatestuser',
      user_pass: 'Iamatestpass123!',
    }
    newPass = bcrypt.hashSync(newUser.user_pass, 1)
    newUser.user_pass = newPass
    db.into('userlogin').insert(newUser)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE TABLE usercreation CASCADE'))

  afterEach('cleanup',() => db.raw('TRUNCATE TABLE usercreation CASCADE'))

  beforeEach('insert creation tea', () => {
    const tea = {
      creation_user: 1,
      creation_id: 1,
      creation_name: "Testea",
      creation_tea: 5,
      creation_flavor1: "matcha",	
      creation_flavor2: null,
      creation_addons1: 13,	
      creation_addons2: 15,	
      creation_milk: null,	
      creation_sweetener: null
    }
    db.into('creation').insert(tea)


  })

  it('GET /api/creation responds with 200', () => {
    return supertest(app)
      .get('/api/creation')
      .set('Authorization', makeAuthHeader(newUser))
      .expect(200);
  });

  it('GET /api/creation/:creation_id responds with 200', () => {
    return supertest(app)
      .get('/api/creation/1')
      .set('Authorization', makeAuthHeader(newUser))
      .expect(200);
  });
});