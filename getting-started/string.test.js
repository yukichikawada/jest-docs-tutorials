const stringMatch = require('./string');

test('matches 2 input strings', () => {
  expect(stringMatch('abcba', 'ba')).toMatch(/=> true/);
});
test('false if false', () => {
  expect(stringMatch('abcba', 'd')).not.toMatch(/=> true/);
});
