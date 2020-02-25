const knex = require('knex')
const app = require('../src/app')

describe('classicRouter', () => {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db.raw('TRUNCATE TABLE classic CASCADE'))

  afterEach('cleanup',() => db.raw('TRUNCATE TABLE classic CASCADE'))

  beforeEach('insert classic tea', () => {
    const tea = {
      classic_name: "Testea",
      classic_tea: 5,
      classic_flavor1: "matcha",	
      classic_flavor2: null,
      classic_addons1: 13,	
      classic_addons2: 15,	
      classic_milk: null,	
      classic_sweetener: null
    }
    db.into('classic').insert(tea)
  })

  it('GET /api/classic responds with 200', () => {
    return supertest(app)
      .get('/api/classic')
      .expect(200);
  });

  it('GET /api/classic/:classic_id responds with 200', () => {
    return supertest(app)
      .get('/api/classic/1')
      .expect(200);
  });
});