import { MapContainer, TileLayer } from "react-leaflet"; //Marker, Popup,
import "leaflet/dist/leaflet.css";
import GeoTiffLayer from "./components/GeoTiffLayer";

export default function App() {
  const tiffUrl = "https://cdn.superfone.co.in/gadha/NDVI_Nov.tiff";
  const center = [27.6329, 80.0173];
  const zoom = 13;

  const options = {
    resolution: 1000,
    opacity: 1
  };

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoTiffLayer url={tiffUrl} options={options} />
    </MapContainer>
  );
}
