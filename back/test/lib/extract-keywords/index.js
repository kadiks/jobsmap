const extractKeywords = require('../../../lib/extract-keywords');

test('check if PHP is extracted', () => {
  const str = "Développeur PHP";
  expect(extractKeywords(str)).toEqual([{ keyword: "php", count: 1 }]);
});