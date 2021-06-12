import React, {useState, useRef, useEffect} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import '../css/Map.css'

const Map = () => {
  const mapElement = useRef();
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: 'RRF5SbdgsyPTbw2a6yRBv1TAv7WTZ3RT',
      container: mapElement.current,
      center: [-121.91599, 37.36765],
      zoom: 15
    });
    setMap(map);
    new tt.Marker().setLngLat([-121.91599, 37.36765]).addTo(map);
    return () => map.remove();
  }, []);

  return (
    <div ref={mapElement} className="mapDiv"></div>
  )
}

export default Map
