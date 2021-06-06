const filterByKeyword = ({ places = [], keywords = [] } = {}) => {
  let filteredPlaces = places;

  if (keywords.length > 0) {
    for (const curKeyword of keywords) {
      filteredPlaces = filteredPlaces.filter((place) => {
        return place.keywords.find((k) => k.keyword === curKeyword);
      });
      console.log("curKeyword", curKeyword);
      console.log("filteredPlaces", filteredPlaces.length);
    }
  }

  // console.log("filteredPlaces", filteredPlaces.length);

  // setPlaces(filteredPlaces);
  // setSelectedKeywords(newKeywords);
  // setFilterType('cities');
  // setCenter(filteredPlaces[0].coords);

  return filteredPlaces;
};

export default filterByKeyword;
