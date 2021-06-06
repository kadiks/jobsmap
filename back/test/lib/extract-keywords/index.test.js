// 'npx jest' to run the tests

const extractKeywords = require('../../../lib/extract-keywords');

test('check if PHP is extracted', () => {
  const str = "Développeur PHP";
  expect(extractKeywords(str)).toEqual([{ keyword: "php", count: 1 }]);
});

// ckeck if all forms of react is counted
test('ckeck if react is counted', () => {
  const str = " react";
  expect(extractKeywords(str)).toEqual([{ keyword: "react", count: 1 }]);
});

test('ckeck if react.js is counted', () => {
  const str = "react.js";
  expect(extractKeywords(str)).toEqual([{ keyword: "react", count: 1 }]);
});

test('ckeck if reactjs is counted', () => {
  const str = "reactjs";
  expect(extractKeywords(str)).toEqual([{ keyword: "react", count: 1 }]);
});

test('ckeck if all forms of react is counted', () => {
  const str = "react react.js reactjs";
  expect(extractKeywords(str)).toEqual([{ keyword: "react", count: 3 }]);
});