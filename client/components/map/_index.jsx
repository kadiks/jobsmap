import { useEffect, useRef } from "react";
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

function SetViewOnClick({ animateRef }) {
  console.log("#setViewOnClick");
  const map = useMapEvent("click", (e) => {
    console.log("locationfoundk!!!!", e.latlng);
    map.panTo(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

const Map = ({
  center = [48.85756, 2.3428],
  zoom = 7,
  markers = [{ title: "Default marker", coords: [48.85756, 2.3428] }],
}) => {
  let map;
  const animateRef = useRef(false);

  useEffect(() => {
    console.log("useEffect #1");
    if (!map) {
      console.log("useEffect #2 out");
      return;
    }
    console.log("useEffect #3");

    map.panTo(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  }, [center]);

  return (
    <MapContainer
      center={center}
      scrollWheelZoom={false}
      zoom={zoom}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SetViewOnClick
        animateRef={() => {
          map = useMap();
          console.log("ok", map);
          map.panTo({ lat: center[0], lng: center[1] }, map.getZoom(), {
            animate: animateRef.current || false,
          });
          return animateRef;
        }}
      />
      {markers.map(({ title, coords }, index) => {
        return (
          <Marker key={index} position={coords}>
            {title && <Popup>{title}</Popup>}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
