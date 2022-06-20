const { generateManyBook } = require('../fake/book.fake')
const BooksService = require('./books.service')

const mockGetAll = jest.fn() // <--------------

/* const MongoLibStub = {
   getAll: mockGetAll,
   create: () => {}
} */

jest.mock('../lib/mongo.lib', () =>
   jest.fn().mockImplementation(() => ({
      getAll: mockGetAll, // <--------------
      create: () => {}
   }))
)

describe('test to BooksService', () => {
   let service
   beforeEach(() => {
      jest.clearAllMocks()
      // arrange
      service = new BooksService()
   })

   describe('test to getBooks', () => {
      test('should return a list books', async () => {
         // arrange
         const fakeBooks = generateManyBook(20)
         mockGetAll.mockResolvedValue(fakeBooks) // <--------------
         // act
         const books = await service.getBooks({})
         // console.log(books)
         // assert
         expect(books.length).toEqual(fakeBooks.length)
         expect(mockGetAll).toHaveBeenCalled() // <--------------
         expect(mockGetAll).toHaveBeenCalledTimes(1) // <--------------
         expect(mockGetAll).toHaveBeenCalledWith('books', {}) // <--------------
      })
      test('should return name book', async () => {
         // arrange
         const fakeBooks = generateManyBook(4)
         mockGetAll.mockResolvedValue(fakeBooks) // <--------------
         // act
         const books = await service.getBooks({})
         // console.log(books)
         // assert
         expect(books[0].name).toEqual(fakeBooks[0].name)
      })
   })
})
