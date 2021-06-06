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
  const testVector = "Passionné par l'agilité et le développement front ? Vous êtes adepte de la veille technologique ?  Vous souhaitez vous investir dans des projets innovants et challengeant ?Au sein de VISEO nous recherchons un Développeur VueJS F/H  pour intervenir sur nos projets et contribuer au développement de notre Practice « Digital Development ». Vos missionsRejoindre une équipe client dans laquelle vous assumerez un poste de Développeur frontend pouvant intervenir sur des problématiques d'implémentations web du mobile au desktop.Vous serez force de proposition sur tous les aspects du projet - de la conception à l'implémentation - pour contribuer au mieux à sa réussite.Les considérations propres à la qualité de la solution - robustesse, performance, sécurité, évolutivité, lisibilité - seront vos préoccupations quotidiennes.Votre profil :Vous êtes diplômé d'une formation Bac+5 en informatique.  Vous justifiez impérativement de 3 ans d'expérience en développement Frontend, en particulier sur le framework Vue.JS.Une bonne connaissance de l'outils TFS serait un plus.Un niveau d'Anglais B2 est requisVous êtes mobile et disposé à vous déplacer 2 jours par semaine à ValenceIntégrer nos équipes au quotidien, ça veut dire quoi ?  Vous ferez partie de la communauté Digital techno: la proximité et la taille humaine de notre organisation vous permettront de rendre visible vos initiatives et d'évoquer facilement vos projets. En parallèle, le dynamisme de l'entreprise et sa croissance perpétuelle multiplieront vos opportunités d'évolution.  Vous bénéficierez d'un management de proximité par votre mentor tout au long de votre parcours chez VISEO : Votre mentor, consultant expérimenté de votre practice, viendra régulièrement échanger avec vous sur les challenges de votre mission, faire chaque semestre le bilan de vos réalisations et évoquer vos ambitions futures et les moyens de les réaliser.  Vous disposerez de multiples moyens pour monter en compétences et découvrir de nouveaux domaines : formations, certifications, Brown Bag Lunchs, ateliers, meet-ups, rencontre d'experts, séminaires techniques.   #VISEO SPIRIT :  Un programme d'apprentissage en e-learning : accès digital academy et 7-speaking  Un accompagnement pour le bien-être : Sophrologie, Yoga, Gymlib, IKVélo .  Deux jours de télétravail par semaine  Du matériel informatique puissant et un double écran  Des futurs locaux agréables proche du parc de la tête d'or (déménagement prévu en décembre 2021 !)N'attendez plus, rejoignez VISEO. Devenez un #PositiveDigitalMaker !";
  console.log(extractKeywords(testVector));
} else {
  module.exports = extractKeywords
}
