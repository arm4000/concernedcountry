"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Image from "next/image";
import React from "react";

//Map's styling
const defaultMapContainerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: "15px 0px 0px 15px",
};

//K2's coordinates
const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

//Default zoom level, can be adjusted
const defaultMapZoom = 18;

//Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "satellite",
};

const LocationMap = () => {
  return (
    ////// <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>?
    <Image
      alt="Home Banner Slide 1"
      src={"/images/ccc-map.png"}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 10,
      }}
    />
    // <LoadScript googleMapsApiKey={""}>
    //   <GoogleMap
    //     mapContainerStyle={defaultMapContainerStyle}
    //     center={'center'}
    //     zoom={10}
    //   >
    //     <Marker position={'center'} />
    //   </GoogleMap>
    // </LoadScript>
  );
};

export default LocationMap;
