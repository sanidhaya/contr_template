import React from 'react'
import './googleMaps.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '400px',
  };
  
  const center = {
    lat: 0, // Default center latitude
    lng: 0, // Default center longitude
  };
  
  const locations = [
    { id: 1, lat: 37.7749, lng: -122.4194, title: 'Location 1' },
    { id: 2, lat: 34.0522, lng: -118.2437, title: 'Location 2' },
    // Add more locations as needed
  ];

const GoogleMaps = () => {
  return (
    <div>
    <LoadScript
    googleMapsApiKey="AIzaSyBROqpiVE9cMmgzIygXFIFx_3zqUAxE3Jc"
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
    >
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.title}
        />
      ))}
    </GoogleMap>
  </LoadScript>
    </div>
  )
}

export default GoogleMaps
