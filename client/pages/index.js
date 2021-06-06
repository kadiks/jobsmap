import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Sidebar, Searchbar, JobPannel } from "../components/navigation";

import { getPlaces } from "../utils/api";

const Home = (props) => {
  const defaultCenter = props.places[0]?.coords || [45.78365, 3.10013];
  const [center, setCenter] = useState(defaultCenter);
  const [places, setPlaces] = useState(props.places);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [filterType, setFilterType] = useState('technologies');

  let mapComp;
  const prevCenterRef = useRef();
  const prevCenter = prevCenterRef.current;

  useEffect(() => {
    filterByKeyword();
  }, []);

  useEffect(() => {
    prevCenterRef.current = center;
  }, [center]);

  const Map = dynamic(() => import("../components/map"), {
    ssr: false,
  });

  const getMap = ({ map }) => {
    console.log("pages/index getMap", map);
    console.log("pages/index getMap map.getCenter", map.getCenter());
    mapComp = map;
  };

  const onClickCity = (coords) => {
    // console.log("coords", coords);
    console.log("mapComp.getCenter()", mapComp.getCenter());
    mapComp.flyTo(coords);
    // setCenter(coords);
    setTimeout(() => {
      // setCenter(coords);
      console.log("mapComp.getCenter()", mapComp.getCenter());
    }, 2000);
  };

  const onChangeFilterType = (id) => {
    setFilterType(id);
  }

  const onClickKeyword = (keyword) => {
    console.log('pages/index #onClickkeyword keyword', keyword);

    filterByKeyword(keyword);
  };

  const filterByKeyword = (keyword = null) => {
    const newKeywords = [...selectedKeywords];

    if (keyword !== null) {
      const keywordIndex = selectedKeywords.indexOf(keyword);
      if (keywordIndex >= 0) {
        newKeywords.splice(keywordIndex, 1);
      } else {
        newKeywords.push(keyword);
      }
    }

    let filteredPlaces = props.places;


    console.log("newKeywords", newKeywords);


    if (newKeywords.length > 0) {
      for (const curKeyword of newKeywords) {
        filteredPlaces = filteredPlaces.filter((place) => {
          return place.keywords.find(k => k.keyword === curKeyword);
        });
        console.log("curKeyword", curKeyword);
        console.log("filteredPlaces", filteredPlaces.length);
      }
    }


    console.log("filteredPlaces", filteredPlaces.length);

    setPlaces(filteredPlaces);
    setSelectedKeywords(newKeywords);
    setFilterType('cities');
    setCenter(filteredPlaces[0].coords);
  };

  const markers = [];
  const cities = [];
  const keywords = [];

  for (const place of places) {
    const keywordsHtml = place.keywords.map((k) => `${k.keyword} : ${k.count}`);
    const marker = {
      title: `${place.name} <br/> ${keywordsHtml.join('<br />')}`,
      coords: place.coords,
    };

    const city = {
      name: place.name,
      value: place.total,
      coords: place.coords,
    };

    const keyword = place.keywords;


    markers.push(marker);
    cities.push(city);
    keywords.push(keyword);
  }

  const uniqKeywords = [];
  const uniqKeywordsObj = [];

  for (const keywordsCity of keywords) {
    for (const keyword of keywordsCity) {
      if (!uniqKeywords.includes(keyword.keyword)) {
        uniqKeywords.push(keyword.keyword);
        uniqKeywordsObj.push({
          name: keyword.keyword,
          value: keyword.keyword
        });
      }
    }
  }

  return (
    <>
      <Head>
        <title>
          Cartographie des offres d'emplois tech en France
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex">
        <div className="flex-none">
          <Sidebar
            filterType={filterType}
            onChangeFilterType={onChangeFilterType}
            cities={cities}
            keywords={uniqKeywordsObj}
            selectedKeywords={selectedKeywords}
            onClickCity={onClickCity}
            onClickKeyword={onClickKeyword} />
        </div>
        <div className="flex-none">
          <JobPannel />

        </div>
        <div className="flex flex-col flex-grow h-screen">
          {/* <Searchbar /> */}
          <div className="flex-1">
            <Map
              defaultCenter={defaultCenter}
              center={center}
              markers={markers}
              getMap={getMap}
            />
          </div>
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