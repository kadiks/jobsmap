const keywords = [
  'javascript',
  'php',
  'ruby',
  'c#',
  'python',
  'java',
];

const extractKeywords = (str) => {

  const keywordObjects = keywords.map((kw) => ({
    keyword: kw,
    count: 0,
  }));
  //console.log(keywordObjects);

  const strToLowerCase = str.toLowerCase();
  const strSplitted = strToLowerCase.split(new RegExp('[-/., ]', 'g'));
  //console.log("strPlitted", strSplitted);

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

  const extractedKeywords = [];
  keywordObjects.map((keywordObject) => {
    if (keywordObject.count > 0) {
      extractedKeywords.push(keywordObject);
    }
  });

  return extractedKeywords;
}

if(require.main === module){
  // le module a été appelé directement (via `node
  // extract-keywords.js`)
  const testVector = "Stack technique - Langage : Vue.js, le back-end est en Python, Rust et C++ - Autres : Vue.js 2/3, Tailwind CSS - Données : Sur AWS, Aurora et Redshift - Cache : Redis - Environnement : Visual Studio code, sur l’OS que vous voulez !"
  console.log(extractKeywords(testVector));
}else{
  module.exports = { extractKeywords, keywords }
}
