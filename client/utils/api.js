const dev = process.env.NODE_ENV !== "production";

const server = dev ? "http://localhost:3002" : "https://mapojob.herokuapp.com";

const getPlaces = async () => {
  const res = await fetch(`${server}/jobs/places`);
  const data = await res.json();

  //   console.log("data", data.data);
  return data?.data || [];
};

export { getPlaces };
