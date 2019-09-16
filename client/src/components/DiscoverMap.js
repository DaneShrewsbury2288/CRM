import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  // InfoWindow
} from "react-google-maps";
import Geocode from "react-geocode";

getLatLng = () => {
  Geocode.fromAddress("Von's 1000SPIRITS").then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.log(error);
    }
  )
}

function Map() {
  // getLatLan = () => {
  //   Geocode.fromAddress("Von's 1000SPIRITS").then(
  //     response => {
  //       const { lat, lng } = response.results[0].gometry.location;
  //       console.log(lat, lng);
  //     },
  //       error => {
  //         console.log(error);
  //       }
  //   )
  // };

  return (
    // <GoogleMap
    //   defaultZoom={10}
    //   defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    // />
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    >
      {/* <Marker
        position={{lat: 47.606564, lng: -122.338312 }}
        /> */}
        <Marker
          position={{}}
        />
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

