const dev = process.env.NODE_ENV !== "production";

const server = dev ? "http://localhost:3002/api" : "https://mapojob.herokuapp.com/api";

console.log('server', server);

const getPlaces = async () => {
  const res = await fetch(`${server}/jobs/places?order=alpha`);
  const data = await res.json();

  // console.log("data", data.data);
  return data?.data || [];
};

const getOffers = async (dptNum) => {
  const res = await fetch(`${server}/jobs/places/dpt`);
  const data = await res.json();

  // console.log("data", data.data);
  return data?.data || [];
};

export {
  getPlaces,
  getOffers
};
