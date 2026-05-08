import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ Fix marker icon issue
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const NetrokonaMap = () => {
  const position = [24.6895, 90.8343]; // Kendua, Netrokona

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md container mx-auto   ">
      <MapContainer
        center={position}
        zoom={9} 
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            📍 Kendua, Netrokona <br /> Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default NetrokonaMap;