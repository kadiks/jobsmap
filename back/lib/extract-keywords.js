const extractKeywords = (str) => {

  const keywords = [
    'javascript',
    'php',
    'ruby',
    'c#',
    'python',
    'java',

    'node',
    'react',
    'vue',
    'angular',
    'svelte',
    'koa',
    'sails',
    'ember',
    'meteor',
    'backbone',
    'hapi',
    'express',
    'nest',
    'adonis',
    'next',
    'gastby',

    'lavarel',
    'symphony',
    'wordpress',
    'silex',
    'codeigniter',
    'zend',
    'laminas',
    'cakephp',
    'slim',
    'phalcon',
    'fuelphp',
    'fat'

  ];

  // Creates un object with the name of the keyword and the count of its occurences
  const keywordObjects = keywords.map((kw) => ({
    keyword: kw,
    count: 0,
  }));
  //console.log(keywordObjects);

  // Function to remove some expressions
  const cleanText = (str) => {
    const cleaned = str.replace('js', '');
    return cleaned;
  }

  // Transforms the str to be processed
  const text = str.toLowerCase()
  const cleanedText = cleanText(text);

  // Cuts the text in an array of expressions
  const strSplitted = cleanedText.split(new RegExp('[-/., ]', 'g'));
  // console.log("strSplitted", strSplitted);

  // Counts the occurences of keywords
  strSplitted.map((word) => {
    if (keywords.includes(word)) {
      keywordObjects.map((keywordObject) => {
        if (word === keywordObject.keyword) {
          keywordObject.count = keywordObject.count + 1
        }
      })
    }
    return keywordObjects;
  });

  // Defines the array to be returned
  const extractedKeywords = [];

  // Pushes only keywords with a positive count in the extractedKeywords array
  keywordObjects.map((keywordObject) => {
    if (keywordObject.count > 0) {
      extractedKeywords.push(keywordObject);
    }
  });
  console.log('extractedKeywords', extractKeywords);
  return extractedKeywords;
}

if (require.main === module) {
  // le module a été appelé directement (via `node
  // extract-keywords.js`)
  const testVector = "react";
  console.log(extractKeywords(testVector));
} else {
  module.exports = extractKeywords
}
