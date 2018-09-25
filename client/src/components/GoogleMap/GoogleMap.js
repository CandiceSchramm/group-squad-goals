import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.7608, lng: -111.891 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker
        position={{
          lat: props.userLocation.coords.latitude,
          lng: props.userLocation.coords.longitude
        }}
      />
    </GoogleMap>
  ))
);

function GoogleMaps({ ...props }) {
  return (
    <RegularMap
      userLocation={props.location}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4UjRzlOV16nZN48fp8_rIsmjA12BKiVI"
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "280px" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
}

export default GoogleMaps;
