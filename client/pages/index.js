import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Sidebar, Searchbar } from "../components/navigation";

import { getPlaces } from "../utils/api";
import { filterByTechnologies, filterByCity } from "../utils/filter";
import { groupByDepartment } from "../utils/group";

const Home = (props) => {
  const defaultCenter = props.places[0]?.coords || [45.78365, 3.10013];
  const [center, setCenter] = useState(defaultCenter);
  const [places, setPlaces] = useState(props.places);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [filterType, setFilterType] = useState("technologies");
  const [filterPlace, setfilterPlace] = useState("departments"); // cities | departments | regions
  const [filterCity, setfilterCity] = useState(null);
  const [isDptView, setIsDptView] = useState(true);

  let mapComp;
  const prevCenterRef = useRef();
  const prevCenter = prevCenterRef.current;

  useEffect(() => {
    updateKeywords();
  }, []);
  useEffect(() => {
    updateKeywords();
  }, [isDptView]);

  useEffect(() => {
    prevCenterRef.current = center;
  }, [center]);

  const Map = dynamic(() => import("../components/map"), {
    ssr: false,
  });

  const getMap = ({ map }) => {
    // console.log("pages/index getMap", map);
    // console.log("pages/index getMap map.getCenter", map.getCenter());
    mapComp = map;
  };

  const onClickCity = (coords) => {
    // console.log("coords", coords);
    // console.log("mapComp.getCenter()", mapComp.getCenter());
    mapComp.flyTo(coords);
    // setCenter(coords);
    setTimeout(() => {
      // setCenter(coords);
      // console.log("mapComp.getCenter()", mapComp.getCenter());
    }, 2000);
  };

  const onClickGroupDpt = (isDptViewFromChild) => {
    setIsDptView(isDptViewFromChild);
  };

  const onChangeFilterType = (id) => {
    setFilterType(id);
  };

  const onClickKeyword = (keyword) => {
    console.log("pages/index #onClickkeyword keyword", keyword);

    updateKeywords(keyword);
  };

  const updateKeywords = (newKeywords = selectedKeywords) => {
    // const newKeywords = [...selectedKeywords];

    // // Add or remove keyword from list
    // if (keyword !== null) {
    //   const keywordIndex = selectedKeywords.indexOf(keyword);
    //   if (keywordIndex >= 0) {
    //     newKeywords.splice(keywordIndex, 1);
    //   } else {
    //     newKeywords.push(keyword);
    //   }
    // }

    let filteredPlaces = filterByTechnologies({
      places: props.places,
      keywords: newKeywords,
    });

    filteredPlaces = filterByCity({
      places: filteredPlaces,
      search: filterCity,
    });

    if (isDptView) {
      filteredPlaces = groupByDepartment({
        places: filteredPlaces,
      });
    }

    setPlaces(filteredPlaces);
    setSelectedKeywords(newKeywords);
    setFilterType("cities");
    // console.log("filteredPlaces[0]", filteredPlaces[0]);
    // setCenter(filteredPlaces[0].coords);
    // console.log("mapComp flyTo #filter 1");
    if (mapComp) {
      // console.log("mapComp flyTo #filter 2");
      mapComp.flyTo(filteredPlaces[0].coords);
    } else {
      setCenter(filteredPlaces[0].coords);
    }
  };

  const markers = [];
  const cities = [];
  const keywords = [];

  for (const place of places) {
    const keywordsHtml = place.keywords.map((k) => `${k.keyword} : ${k.count}`);
    const marker = {
      title: `${place.name} <br/> ${keywordsHtml.join("<br />")}`,
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
          value: keyword.keyword,
        });
      }
    }
  }

  return (
    <>
      <Head>
        <title>Cartographie des offres d'emplois tech en France</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="flex">
        <div className="flex-none">
          <Sidebar
            filterType={filterType}
            onChangeFilterType={onChangeFilterType}
            cities={cities}
            keywords={uniqKeywordsObj}
            selectedKeywords={selectedKeywords}
            isDptView={isDptView}
            onClickCity={onClickCity}
            onClickKeyword={onClickKeyword}
            onClickGroupDpt={onClickGroupDpt}
          />
        </div>
        <div className="flex flex-col flex-grow h-screen">
          <Searchbar
            flyto={onClickCity}
            places={
              isDptView
                ? props.places
                : groupByDepartment({ places: props.places })
            }
          />
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
