const filterByCity = ({ places = [], search = null } = {}) => {
  if (search === null) {
    return places;
  }

  const filteredPlaces = places.filter((place) => {
    return place.name.match(new RegExp(search, "gi")) !== null;
  });

  return filteredPlaces;
};

export default filterByCity;
