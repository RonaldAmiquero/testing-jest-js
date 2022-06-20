const mockGetAll = jest.fn()
const request = require('supertest')
const createApp = require('../src/app')
const { generateManyBook } = require('../src/fake/book.fake')

jest.setTimeout(10000)
jest.mock('../src/lib/mongo.lib.js', () =>
   jest.fn().mockImplementation(() => ({
      getAll: mockGetAll, // <--------------
      create: () => {}
   }))
)

describe('Test for books endpoint', () => {
   let app
   let server
   beforeAll(() => {
      app = createApp()
      server = app.listen(3003)
   })

   afterAll(async () => {
      await server.close()
   })

   describe('Test for [GET] /api/v1/books', () => {
      test('should return a list books', () => {
         // arrange
         const fakeBooks = generateManyBook(5)
         mockGetAll.mockResolvedValue(fakeBooks)
         // act
         return request(server)
            .get('/api/v1/books')
            .expect(200)
            .then(({ body }) => {
               console.log(body)
               // assert
               expect(body.length).toEqual(5)
            })
      })
   })
})
