import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import cfg from "../../utils/config";

const icon = new L.Icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 50],
  className: "marker",
});

function Map({ markers, defaultCenter, center, zoom = 8, getMap }) {
  return (
    <MapContainer
      center={defaultCenter}
      zoom={zoom}
      scrollWheelZoom={false}
      whenCreated={(map) => {
        map.flyTo(center);
        getMap({ map });
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors , <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/${cfg.MAPBOX_USERNAME}/${cfg.MAPBOX_CUSTOM_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${cfg.MAPBOX_TOKEN}`}
      />
      {markers.map(({ title, coords }, index) => {
        return (
          <Marker key={index} position={coords} icon={icon}>
            {title && (
              <Popup className="font-sans">
                <p dangerouslySetInnerHTML={{ __html: title }} />
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
