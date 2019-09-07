import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  // Marker,
  // InfoWindow
} from "react-google-maps";
require('dotenv').config();

// Our apiKey is: AIzaSyDCONYMdBk6xNE26CEFLfnNv2c_nF1LKuM

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: 122.3321 }}
    />
  )
}

const API_KEY = process.env.REACT_APP_GOOGLE_KEY
console.log("API", API_KEY)
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

