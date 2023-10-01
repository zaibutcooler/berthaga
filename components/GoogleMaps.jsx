import React from "react";

import {
  GoogleMap as GoogleMaps,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

// don't know the actual location so haven't changed yet
const location = {
  lat: 59.860096 - 0.0002,
  lng: 17.6305953,
};

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "8px",
};

const GoogleMap = () => {
  const handleMarkerClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, "_blank");
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMaps
        mapContainerStyle={containerStyle}
        center={location}
        zoom={17}
        options={{ draggable: false, mapId: "330578b92517eac7" }}>
        <Marker
          position={location}
          icon={{
            url: "/logo.png",
            scaledSize: { width: 50, height: 50 },
          }}
          onClick={handleMarkerClick}
          style={{ cursor: "pointer" }}
        />
      </GoogleMaps>
    </LoadScript>
  );
};

export default React.memo(GoogleMap);
