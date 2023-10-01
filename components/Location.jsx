"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import GoogleMaps from "./GoogleMaps";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="flex justify-center pt-20">
      <main className="w-[1200px] container px-4 md:px-0">
        <div className="w-full h-96 bg-green-50 mb-6 rounded-lg">
          {" "}
          <GoogleMaps />
        </div>
        <div className=" flex justify-center">
          <p className="w-full md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            cumque laudantium obcaecati quidem dolor quod sunt neque cupiditate?
            Porro aliquam modi, vel nisi cupiditate ab harum facere corrupti
            illo a!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Location;
