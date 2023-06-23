import React from "react";
import GoogleMapReact from "google-map-react";
import MapIcon from "../UI/MapIcon";

const Map: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 5.5571096,
      lng: -0.2012376,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBKSwWDsMjv81LK0ZPwpZCzt4TxalcbQfQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapIcon lat={5.5571096} lng={-0.2012376} />
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
