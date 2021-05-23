import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Sidebar } from "../components/navigation";

import { getPlaces } from "../utils/api";

const Home = ({ places }) => {
  const [center, setCenter] = useState(
    places[0]?.coords || [45.78365, 3.10013]
  );
  const prevCenterRef = useRef();
  const prevCenter = prevCenterRef.current;

  useEffect(() => {
    prevCenterRef.current = center;
  }, [center]);

  const Map = dynamic(() => import("../components/map"), {
    ssr: false,
  });

  const onClickCity = (coords) => {
    console.log("coords", coords);
    setCenter(coords);
  };

  const markers = places.map((place) => {
    return {
      title: `${place.name}. Total : ${place.total}`,
      coords: place.coords,
    };
  });

  const cities = places.map((place) => {
    return {
      name: place.name,
      value: place.total,
      coords: place.coords,
    };
  });

  return (
    <>
      <Head>
        <title>
          Page d'accueil : Cartographie des offres d'emplois tech en France
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <div className="flex-none">
          <Sidebar cities={cities} onClick={onClickCity} />
        </div>
        <div className="flex-grow h-screen">
          <Map center={center} prevCenter={prevCenter} markers={markers} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  console.log({ context });
  const places = await getPlaces();

  // console.log({ places });

  return {
    props: {
      places,
    }, // will be passed to the page component as props
  };
}

export default Home;