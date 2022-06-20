describe('set', () => {
   beforeAll(() => {
      // console.log('beforeAll')
      // up db
   })

   afterAll(() => {
      // console.log('afterAll')
      // down db
   })

   beforeEach(() => {
      // run before every test
      // console.log('beforeEach')
   })

   afterEach(() => {
      // run after every test
      // console.log('afterEach')
   })

   test('case 1', () => {
      expect(1 + 2).toBe(3)
   })

   test('case 2', () => {
      expect(2 + 2).toBe(4)
      // console.log('case 2')
   })

   describe('sub group', () => {
      beforeAll(() => {
         // run into this group
         // console.log('beforeAll')
         // up server external api
      })
      test('case 3', () => {
         expect(1 + 7).toBe(8)
      })

      test('case 4', () => {
         expect(2 + 8).toBe(10)
      })
   })
})
