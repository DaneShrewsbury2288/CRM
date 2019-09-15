import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  // Marker,
  // InfoWindow
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function DiscoverMap() {

  return (

    <div style={{ width: "75vw", height: "75vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
          }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>

  );
}

