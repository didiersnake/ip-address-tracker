import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./ipMap.css"
import { Icon } from 'leaflet'


const DEFAULT_LONGITUDE = 51.505;
const DEFAULT_LATITUDE = -0.09;
const IpMap = () => {

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })
        return position === null ? null : (
          <Marker position={position} icon={customIcon}>
            <Popup>You are here</Popup>
          </Marker>
        );
    }

    const customIcon = new Icon({
      iconUrl: require("../images/icon-location.svg"),
      iconSize: [30, 30], //size of icon
    });
    
  return (
    <MapContainer center={[DEFAULT_LONGITUDE, DEFAULT_LATITUDE]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker/>
    </MapContainer>
  );
}

export default IpMap