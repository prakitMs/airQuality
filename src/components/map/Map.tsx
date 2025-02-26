"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  const position: LatLngExpression = [13.7563, 100.5018]; // พิกัดเริ่มต้น (ลอนดอน)

  const numberMarker = (num: number) =>
    divIcon({
      className: "custom-marker",
      html: `<div class="marker-number">${num}</div>`, // ใส่ตัวเลขลงไป
      iconSize: [30, 30], // กำหนดขนาดไอคอน
      iconAnchor: [15, 30], // กำหนดจุดยึดของไอคอน
    });

  return (
    <div className="w-[3ถvw] h-[35vw] flex justify-center items-center rounded-2xl shadow-lg overflow-hidden mt-10 ml-5" >
      <MapContainer
        center={position}
        zoom={6}
        className="w-[50vw] h-[50vw]"
      >
        {/* OpenStreetMap Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

<Marker position={position} icon={numberMarker(1)}>
          <Popup>
            <div className="text-center">
              <strong>จุดที่ 1</strong>
              <p>กรุงเทพมหานคร </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
