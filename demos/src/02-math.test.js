const { sum, divide, multiply } = require('./02-math');

test('adds  3 and 5 should be 8', () => {
  const rta = sum(3, 5);
  expect(rta).toBe(8);
});

test('adds 8 and 7 should 56', () => {
  const rta = multiply(8, 7);
  expect(rta).toBe(56);
});

test('should divide', () => {
  const rta = divide(8, 4);
  expect(rta).toBe(2);

  const rta2 = divide(28, 4);
  expect(rta2).toBe(7);
});

test('divide for zero', () => {
  const rta = divide(8, 0);
  expect(rta).toBe(null);
});
