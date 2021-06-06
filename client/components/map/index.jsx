import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

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
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(({ title, coords }, index) => {
        return (
          <Marker key={index} position={coords}>
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
