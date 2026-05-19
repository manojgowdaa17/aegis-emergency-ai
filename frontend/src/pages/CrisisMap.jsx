import Sidebar from "../components/Sidebar";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

export default function CrisisMap() {

  const emergencies = [
    {
      id:1,
      position:[12.9716,77.5946],
      title:"Fire Emergency",
    },
    {
      id:2,
      position:[13.0827,80.2707],
      title:"Flood Alert",
    },
  ];

  return (
    <div className="flex bg-dark min-h-screen text-white">

      <Sidebar />

      <div className="ml-72 w-full p-5">

        <h1 className="text-5xl font-bold mb-5">
          Live Crisis Map
        </h1>

        <div className="rounded-2xl overflow-hidden border border-red-500">

          <MapContainer
            center={[12.9716,77.5946]}
            zoom={5}
            className="h-[80vh] w-full"
          >

            <TileLayer
              attribution="OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {emergencies.map((item)=>(

              <div key={item.id}>

                <Marker position={item.position}>
                  <Popup>
                    {item.title}
                  </Popup>
                </Marker>

                <Circle
                  center={item.position}
                  radius={50000}
                  pathOptions={{
                    color:"red",
                  }}
                />

              </div>

            ))}

          </MapContainer>

        </div>

      </div>

    </div>
  );
}