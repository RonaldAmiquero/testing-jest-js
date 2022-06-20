const { MongoClient } = require('mongodb')
const request = require('supertest')
const createApp = require('../src/app')
const { config } = require('../src/config')

const DB_NAME = config.dbName
const MONGO_URI = config.dbUrlTest

/* jest.setTimeout(10000) */

describe('Test for books endpoint', () => {
   let app = null
   let server = null
   let database = null
   beforeAll(async () => {
      app = createApp()
      server = app.listen(3001)

      const client = new MongoClient(MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })

      await client.connect()
      database = client.db(DB_NAME)
   })

   afterAll(async () => {
      await server.close()
      await database.dropDatabase()
   })

   describe('Test for [GET] /api/v1/books', () => {
      test('should return a list books', async () => {
         // arrange
         const seedData = await database.collection('books').insertMany([
            {
               name: 'Book 1',
               year: 2020,
               author: 'Author 1'
            },
            {
               name: 'Book 2',
               year: 2020,
               author: 'Author 2'
            }
         ])
         // act
         return request(server)
            .get('/api/v1/books')
            .expect(200)
            .then(({ body }) => {
               console.log(body)
               // assert
               expect(body.length).toEqual(seedData.insertedCount)
            })
      })
   })
})
