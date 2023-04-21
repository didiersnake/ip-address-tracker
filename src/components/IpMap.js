import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ipMap.css";
import L from "leaflet";
import icon from "../images/icon-location.svg"
import { useSelector } from "react-redux";
import { details, ipstatus } from "./ipMapSlice";
import IpStateData from "./IpStateData";

const DEFAULT_LONGITUDE = 51.505;
const DEFAULT_LATITUDE = -0.09;

const IpMap = () => {
  const ipData = useSelector(details);
  const status = useSelector(ipstatus);
  console.log(ipData);
  const [latitude, setLatitude] = useState(ipData ? ipData.latitude : null);
  const [longitude, setlongitude] = useState(ipData ? ipData.longitude : null);

    //from leaflet icon class
  const customIcon = new L.icon({
    iconUrl: icon,
    iconSize: [25, 30], //size of icon
  });

  function LocationMarker() {
    //position = user coordinates
    const [position, setPosition] = useState(null);
    const map = useMap();

    //after render locate user
    //location found? set position long. & lat.
    //fly to located coords and zoom
    useEffect(() => {
      map.locate().on("locationfound", (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map]);
    //if ipdata exist return marker with ip coords
    return ipData ? (
      <Marker position={[longitude, latitude]} icon={customIcon}>
        <Popup>You are here</Popup>
      </Marker>
    ) : //else return user position
    position === null ? null : (
      <Marker position={position} icon={customIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <>
      <IpStateData />
      <MapContainer
        center={[DEFAULT_LONGITUDE, DEFAULT_LATITUDE]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default IpMap;
