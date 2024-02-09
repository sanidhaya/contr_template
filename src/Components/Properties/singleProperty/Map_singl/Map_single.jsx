import React from 'react'
import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map_single.css'


const MapComponent = () => {
  return (
    <div className='map'>
    <Map className= 'mapcenter'
    mapboxAccessToken="pk.eyJ1Ijoic2FuaWRoYXlhIiwiYSI6ImNscGVhdjFqODFjNnIyam5rc2JjcjBuZTEifQ.MXmXkK-8vRLShh0U4NZM6A"
    initialViewState={{
      longitude: 77.4,
      latitude: 28.8,
      zoom: 14
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
    </div>
  )
}

export default MapComponent
