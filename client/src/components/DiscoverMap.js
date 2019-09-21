import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
  // InfoWindow
} from "react-google-maps";
import markers from "./JSON/markers.json";

function Map() {
  return (
    <GoogleMap
      defaultZoom={12 }
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    >
      {markers.map(function(mark, i){
        let lat = parseFloat(mark.lat);
        let lng = parseFloat(mark.lng);
        return (
          <Marker
            key={i}
            position={{lat, lng}}
          />
        )
      })}
    </GoogleMap>
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

