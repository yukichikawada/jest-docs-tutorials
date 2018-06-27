const myfilter = require('./arrayContain');

test('filters arrays based on input', () => {
  expect(myfilter([1, 2, 3, 4, 5], 3)).toContain(3);
  expect(myfilter(["a", "b", "c", "d", "e"], "e")).toContain("e");
});