const sum = require('./01-sum');

test('adds 1 + 2 to equal 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});
