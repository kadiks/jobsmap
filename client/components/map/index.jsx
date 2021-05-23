import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  MapConsumer,
  useMap,
} from "react-leaflet";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function DisplayPosition({ map, center, prevCenter }) {
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.flyTo(center, zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    console.log("useEffect update Map (Display)");
    console.log("useEffect update center", center);
    console.log("useEffect update prevcenter", prevCenter);

    if (prevCenter) {
      setPosition({ lat: prevCenter[0], lng: prevCenter[1] });
      //   map.flyTo(center, 8);
    }

    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove, prevCenter]);

  return null;
}

function Map({ markers, center, prevCenter, zoom = 8 }) {
  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        whenCreated={setMap}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ title, coords }, index) => {
          return (
            <Marker key={index} position={coords}>
              {title && <Popup>{title}</Popup>}
            </Marker>
          );
        })}
      </MapContainer>
    ),
    []
  );

  return (
    <>
      {map ? (
        <DisplayPosition map={map} center={center} prevCenter={prevCenter} />
      ) : null}
      {displayMap}
    </>
  );
}

export default Map;
