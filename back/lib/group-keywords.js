const groupKeywords = (keywords) => {
  const javascriptKeywords = ["javascript", "react", "node", "vue", "angular", "express"];
  const phpKeywords = ["php", "symfony", "lavarel"];
  const rubyKeywords = ["ruby"];
  const csharpKeywords = ["c#"];
  const pythonKeywords = ["python"];
  const javaKeywords = ["java"];

  const frontKeywords = ["react", "angular", "vue", "css", "html"];
  const backKeywords = ["node", "express"];
  const databaseKeywords = ["mongodb", "mysql", "firebase"];

  const groupedWords = {
    "javascript": 0,
    "php": 0,
    "ruby": 0,
    "c#": 0,
    "python": 0,
    "java": 0,
    "front": 0,
    "back": 0,
    "database": 0
  };

  keywords.map((keyword) => {
    if (javascriptKeywords.includes(keyword.keyword)) {
      groupedWords.javascript = groupedWords.javascript + 1
    }
    if (phpKeywords.includes(keyword.keyword)) {
      groupedWords.php = groupedWords.php + 1
    }
    if (rubyKeywords.includes(keyword.keyword)) {
      groupedWords.ruby = groupedWords.ruby + 1
    }
    if (csharpKeywords.includes(keyword.keyword)) {
      groupedWords.csharp = groupedWords.csharp + 1
    }
    if (pythonKeywords.includes(keyword.keyword)) {
      groupedWords.python = groupedWords.python + 1
    }
    if (javaKeywords.includes(keyword.keyword)) {
      groupedWords.java = groupedWords.java + 1
    }
    if (frontKeywords.includes(keyword.keyword)) {
      groupedWords.front = groupedWords.front + 1
    }
    if (backKeywords.includes(keyword.keyword)) {
      groupedWords.back = groupedWords.back + 1
    }
    if (databaseKeywords.includes(keyword.keyword)) {
      groupedWords.database = groupedWords.database + 1
    }

    return groupedWords;
  });

  const asArray = Object.entries(groupedWords);
  const isNotNull = asArray.filter(([key, value]) => value > 0);
  const groupedKeywords = Object.fromEntries(isNotNull);
  return groupedKeywords;
}

const keywords = [{ keyword: "react", count: 1 }, { keyword: "mongodb", count: 1 }, { keyword: "node", count: 1 }, { keyword: "express", count: 1 }];

console.log(groupKeywords(keywords));