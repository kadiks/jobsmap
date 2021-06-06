// All French accent regex: https://blog.smarchal.com/regex-et-unicode
// All French departments: https://www.notretemps.com/loisirs/actualites-loisirs/la-liste-des-departements-francais,i186209

const listDepartment = {
  "01": {
    name: "Ain",
    city: "Bourg-en-bresse",
  },

  "02": {
    name: "Aisne",
    city: "Laon",
  },

  "03": {
    name: "Allier",
    city: "Moulins",
  },

  "04": {
    name: "Alpes-de-Haute-Provence",
    city: "Digne-les-bains",
  },

  "05": {
    name: "Hautes-alpes",
    city: "Gap",
  },

  "06": {
    name: "Alpes maritimes",
    city: "Nice",
  },

  "07": {
    name: "Ardèche",
    city: "Privas",
  },

  "08": {
    name: "Ardennes",
    city: "Charleville-mézières",
  },

  "09": {
    name: "Ariège",
    city: "Foix",
  },

  10: {
    name: "Aube",
    city: "Troyes",
  },

  11: {
    name: "Aude",
    city: "Carcassonne",
  },

  12: {
    name: "Aveyron",
    city: "Rodez",
  },

  13: {
    name: "Bouches-du-Rhône",
    city: "Marseille",
  },

  14: {
    name: "Calvados",
    city: "Caen",
  },

  15: {
    name: "Cantal",
    city: "Aurillac",
  },

  16: {
    name: "Charente",
    city: "Angoulême",
  },

  17: {
    name: "Charente-maritime",
    city: "La rochelle",
  },

  18: {
    name: "Cher",
    city: "Bourges",
  },

  19: {
    name: "Corrèze",
    city: "Tulle",
  },

  20: {
    name: "Corse",
    city: "Ajaccio",
  },

  "2A": {
    name: "Corse-du-sud",
    city: "Ajaccio",
  },

  "2B": {
    name: "Haute-Corse",
    city: "Bastia",
  },

  21: {
    name: "Côte-d'Or",
    city: "Dijon",
  },

  22: {
    name: "Côtes-d'Armor",
    city: "Saint-brieuc",
  },

  23: {
    name: "Creuse",
    city: "Guéret",
  },

  24: {
    name: "Dordogne",
    city: "Périgueux",
  },

  25: {
    name: "Doubs",
    city: "Besançon",
  },

  26: {
    name: "Drôme",
    city: "Valence",
  },

  27: {
    name: "Eure",
    city: "Évreux",
  },

  28: {
    name: "Eure-et-loir",
    city: "Chartres",
  },

  29: {
    name: "Finistère",
    city: "Quimper",
  },

  30: {
    name: "Gard",
    city: "Nîmes",
  },

  31: {
    name: "Garonne (Haute)",
    city: "Toulouse",
  },

  32: {
    name: "Gers",
    city: "Auch",
  },

  33: {
    name: "Gironde",
    city: "Bordeaux",
  },

  34: {
    name: "Hérault",
    city: "Montpellier",
  },

  35: {
    name: "Ille et vilaine",
    city: "Rennes",
  },

  36: {
    name: "Indre",
    city: "Châteauroux",
  },

  37: {
    name: "Indre-et-loire",
    city: "Tours",
  },

  38: {
    name: "Isère",
    city: "Grenoble",
  },

  39: {
    name: "Jura",
    city: "Lons-le-saunier",
  },

  40: {
    name: "Landes",
    city: "Mont-de-marsan",
  },

  41: {
    name: "Loir-et-cher",
    city: "Blois",
  },

  42: {
    name: "Loire",
    city: "Saint-étienne",
  },

  43: {
    name: "Haute-loire",
    city: "Le puy-en-velay",
  },

  44: {
    name: "Loire atlantique",
    city: "Nantes",
  },

  45: {
    name: "Loiret",
    city: "Orléans",
  },

  46: {
    name: "Lot",
    city: "Cahors",
  },

  47: {
    name: "Lot-et-garonne",
    city: "Agen",
  },

  48: {
    name: "Lozère",
    city: "Mende",
  },

  49: {
    name: "Maine et loire",
    city: "Angers",
  },

  50: {
    name: "Manche",
    city: "Saint-lô",
  },

  51: {
    name: "Marne",
    city: "Châlons-en-champagne",
  },

  52: {
    name: "Haute-marne",
    city: "Chaumont",
  },

  53: {
    name: "Mayenne",
    city: "Laval",
  },

  54: {
    name: "Meurthe-et-moselle",
    city: "Nancy",
  },

  55: {
    name: "Meuse",
    city: "Bar-le-duc",
  },

  56: {
    name: "Morbihan",
    city: "Vannes",
  },

  57: {
    name: "Moselle",
    city: "Metz",
  },

  58: {
    name: "Nièvre",
    city: "Nevers",
  },

  59: {
    name: "Nord",
    city: "Lille",
  },

  60: {
    name: "Oise",
    city: "Beauvais",
  },

  61: {
    name: "Orne",
    city: "Alençon",
  },

  62: {
    name: "Pas-de-calais",
    city: "Arras",
  },

  63: {
    name: "Puy-de-dôme",
    city: "Clermont-ferrand",
  },

  64: {
    name: "Pyrénées-atlantiques",
    city: "Pau",
  },

  65: {
    name: "Hautes-Pyrénées",
    city: "Tarbes",
  },

  66: {
    name: "Pyrénées-orientales",
    city: "Perpignan",
  },

  67: {
    name: "Bas-rhin",
    city: "Strasbourg",
  },

  68: {
    name: "Haut-rhin",
    city: "Colmar",
  },

  69: {
    name: "Rhône",
    city: "Lyon",
  },

  70: {
    name: "Haute-saône",
    city: "Vesoul",
  },

  71: {
    name: "Saône-et-loire",
    city: "Mâcon",
  },

  72: {
    name: "Sarthe",
    city: "Le mans",
  },

  73: {
    name: "Savoie",
    city: "Chambéry",
  },

  74: {
    name: "Haute-savoie",
    city: "Annecy",
  },

  75: {
    name: "Paris",
    city: "Paris",
  },

  76: {
    name: "Seine-maritime",
    city: "Rouen",
  },

  77: {
    name: "Seine-et-marne",
    city: "Melun",
  },

  78: {
    name: "Yvelines",
    city: "Versailles",
  },

  79: {
    name: "Deux-sèvres",
    city: "Niort",
  },

  80: {
    name: "Somme",
    city: "Amiens",
  },

  81: {
    name: "Tarn",
    city: "Albi",
  },

  82: {
    name: "Tarn-et-Garonne",
    city: "Montauban",
  },

  83: {
    name: "Var",
    city: "Toulon",
  },

  84: {
    name: "Vaucluse",
    city: "Avignon",
  },

  85: {
    name: "Vendée",
    city: "La roche-sur-yon",
  },

  86: {
    name: "Vienne",
    city: "Poitiers",
  },

  87: {
    name: "Haute-vienne",
    city: "Limoges",
  },

  88: {
    name: "Vosges",
    city: "Épinal",
  },

  89: {
    name: "Yonne",
    city: "Auxerre",
  },

  90: {
    name: "Territoire de belfort",
    city: "Belfort",
  },

  91: {
    name: "Essonne",
    city: "Évry",
  },

  92: {
    name: "Hauts de seine",
    city: "Nanterre",
  },

  93: {
    name: "Seine-Saint-Denis",
    city: "Bobigny",
  },

  94: {
    name: "Val-de-marne",
    city: "Créteil",
  },

  95: {
    name: "Val-d'Oise",
    city: "Cergy Pontoise",
  },

  971: {
    name: "Guadeloupe",
    city: "Basse-terre",
  },

  972: {
    name: "Martinique",
    city: "Fort-de-france",
  },

  973: {
    name: "Guyane",
    city: "Cayenne",
  },

  974: {
    name: "La réunion",
    city: "Saint-denis",
  },

  976: {
    name: "Mayotte",
    city: "Mamoudzou",
  },
};

const getListDptName = (listDepartment) => {
  const entries = Object.entries(listDepartment);
  const dptNames = {};
  entries.forEach((entry) => {
    const dptName = entry[1].name.toLowerCase();
    dptNames[dptName] = entry[0];
  });

  return dptNames;
};

const listDepartmentName = getListDptName(listDepartment);

export { listDepartment, listDepartmentName };
