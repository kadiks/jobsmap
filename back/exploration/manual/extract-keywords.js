const keywords = [
  "dupral",
  "css",
  "html",
  "css",
  "php",
  "symfony",
  "zend",
  "oracle",
  "sql",
  "visual basic",
  "javascript",
  "jquery",
  "mysql",
  "rest",
  "api",
  "python",
  "docker",
  "jenkins",
  "git",
  "java",
  "java jee",
  "ruby",
  "shell",
  "eclipse",
  "visual studio",
  ".net",
  "asp.net",
  "bootstrap",
  "c#",
  "mvc",
  "react",
  "backbonejs",
  "postgresql",
  "angular",
  "unix",
  "linux",
  "ubuntu",
  "node.js",
  "hybernate",
  "spring",
  "azure",
  "elastic search",
  "mongodb",
  "aws",
  "kubernetes",
  "debian",
  "centos",
  "SGBD",
  "lavarel",
  "kafka",
  "android",
  "gitlab",
  "github",
  "scala",
  "magento",
  "c",
  "c++",
  "saas",
  "vue",
  "jira",
  "visual basic",
  "Maven",
  "uml",
  "typescript",
  "aix",
  "es6"
];

const extractKeywords = (str) => {
  const extractedKeywords = []; //{keyword, count}
  const strToLowerCase = str.toLowerCase();
  const strSplitted = strToLowerCase.split(" ");
  strSplitted.map((word) => {
    keywords.includes(word) ?
 
  })
  return extractedKeywords;
}