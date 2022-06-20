const { faker } = require('@faker-js/faker')

const generateOneBook = () => ({
   _id: faker.datatype.uuid(),
   name: faker.commerce.productName(),
   price: faker.commerce.price()
})

const generateManyBook = (size) => {
   const limit = size ?? 10
   const books = []
   for (let i = 0; i < limit; i++) {
      books.push(generateOneBook())
   }
   return [...books]
}

module.exports = {
   generateOneBook,
   generateManyBook
}
