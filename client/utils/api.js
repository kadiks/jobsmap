const dev = process.env.NODE_ENV !== "production";

const server = dev
  ? "http://localhost:3000/api"
  : "https://your_deployment.server.com";

const getPlaces = async () => {
  const res = await fetch(`${server}/jobs/places`);
  const data = await res.json();

  return data;
};

export { getPlaces };
