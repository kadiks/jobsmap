import { listDepartment, listDepartmentName } from "./listDepartment";

const groupByDepartment = ({ places = [] } = {}) => {
  const groupByDpt = {};
  /**
   * {
   *   "69": [{}, {}, {}, {}, {}],
   *   "70": [{}, {}]
   * }
   */
  for (const place of places) {
    if (!place.id) {
      // console.log("listDepartmentName", listDepartmentName);
      // console.log("place.name.toLowerCase()", place.name.toLowerCase());
      if (listDepartmentName[place.name.toLowerCase()]) {
        // console.log("#1 place", place);
        place.id = listDepartmentName[place.name.toLowerCase()];
      }
    }
    if (place.id) {
      // console.log("#2 place", place);
      let dptName = place.id.substr(0, 2);
      if (dptName === "97") {
        dptName = place.id.substr(0, 3);
      }
      if (!groupByDpt.hasOwnProperty(dptName)) {
        groupByDpt[dptName] = [];
      }

      groupByDpt[dptName].push(place);
    }
  }
  // console.table(groupByDpt);

  const dpts = [];
  const dptNames = Object.keys(groupByDpt);
  console.log({groupByDpt});
  for (const dptName of dptNames) {
    const cities = groupByDpt[dptName];
    console.log({dptName});
    
    const cityMerge = {
      id: dptName,
      name: listDepartment[dptName].name,
      total: 0,
      type: "department",
      coords: cities[0].coords,
      keywords: [],
    };
    for (const city of cities) {
      cityMerge.total += city.total;
      cityMerge.keywords = mergeKeywords({
        keywords: cityMerge.keywords,
        newKeywords: city.keywords,
      });
    }
    dpts.push(cityMerge);
  }

  dpts.sort((a, b) => {
    return (
      a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0)
    );
  });

  // console.table(dpts);

  return dpts;
};

const mergeKeywords = ({ keywords, newKeywords }) => {
  // console.log("#mergeKeywords #1");
  // console.table(keywords);
  for (const newKeyword of newKeywords) {
    const index = keywords.findIndex((k) => k.keyword === newKeyword.keyword);
    if (index === -1) {
      keywords.push(newKeyword);
    } else {
      keywords[index].count += newKeyword.count;
    }
  }

  // console.log("#mergeKeywords #2");
  // console.table(keywords);
  return keywords;
};

export default groupByDepartment;
