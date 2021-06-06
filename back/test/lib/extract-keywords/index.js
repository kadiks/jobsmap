// 'npx jest' to run the tests

const extractKeywords = require('../../../lib/extract-keywords');

test('check if PHP is extracted', () => {
  const str = "Développeur PHP";
  expect(extractKeywords(str)).toEqual([{ keyword: "php", count: 1 }]);
});

test('ckeck if all forms of react is counted', () => {
  const str = " react react.js reactjs";
  expect(extractKeywords(str)).toEqual([{ keyword: "react", count: 3 }]);
});