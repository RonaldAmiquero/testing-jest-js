// matchers
test('test obj', () => {
   const data = { name: 'ronald' }
   data.lastname = 'amiquero'
   expect(data).toMatchObject({ name: 'ronald', lastname: 'amiquero' })
   expect(data).toEqual({ name: 'ronald', lastname: 'amiquero' })
})

test('null', () => {
   const data = null
   expect(data).toBeNull()
   expect(data).toBeDefined()
   expect(data).not.toBeUndefined()
})

test('booleans', () => {
   const data = true
   expect(data).toEqual(true)
   expect(data).toBeTruthy()
   expect(false).toBeFalsy()
   expect(0).toBeFalsy()
   expect('').toBeFalsy()
})

test('string', () => {
   expect('bolardeno').toMatch('deno')
})

test('list / array', () => {
   const numbers = [1, 2, 3, 4, 5]
   expect(numbers).toContain(3)
})
