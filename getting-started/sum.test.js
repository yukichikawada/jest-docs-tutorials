const sum = require('./sum');

test('adds 2 + 2 toBe', () => {
  expect(sum(2, 2)).toBe(4);
});
test('adds 2 + 3 toEqual', () => {
  expect(sum(2, 3)).toEqual(5);
});
test('adds 2 + 4 not.toBe', () => {
  expect(sum(2, 4)).not.toBe(9);
});
test('adds 3 + 3 methods: >, >=, <=, <', () => {
  const value = 3 + 3;
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(6);
  expect(value).toBeLessThan(7);
  expect(value).toBeLessThanOrEqual(6);
});
test('adds floating point numbers toBeCloseTo()', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3001);
});