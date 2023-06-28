import React from "react";
import GoogleMapReact from "google-map-react";
// import MapIcon from "../UI/MapIcon";

const Map: React.FC = () => {
  const defaultProps = {
    center: {
      lat: 5.5571096,
      lng: -0.2012376,
    },
    zoom: 10,
  };

  // const AnyComponent: React.FC<{ lat: number; lng: number }> = () => {
  //   return (
  //     <div
  //       style={{ translate: "translate(-50% -50%)" }}
  //       className="absolute p-1 inline rounded-full bg-blue-400"
  //     >
  //       Accra
  //     </div>
  //   );
  // };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBKSwWDsMjv81LK0ZPwpZCzt4TxalcbQfQ" }}
        // defaultCenter={defaultProps.center}
        center={{
          lat: 5.5571096,
          lng: -0.2012376,
        }}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
        {/* <MapIcon  /> */}
        {/* <AnyComponent lat={5.5571096} lng={-0.2012376} /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
