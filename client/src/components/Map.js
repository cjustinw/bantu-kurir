import React, {useState,useRef, useEffect} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
import '../css/Map.css'

const Map = ({data}) => {
  const mapElement = useRef();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let mapData = tt.map({
      key: 'RRF5SbdgsyPTbw2a6yRBv1TAv7WTZ3RT',
      container: mapElement.current,
      center: [data.lokasi[0].longitude, data.lokasi[0].latitude],
      zoom: 15
    });
    data.jalur.forEach((elmt) => {
      let marker = new tt.Marker().setLngLat([data.lokasi[elmt].longitude, data.lokasi[elmt].latitude]).addTo(mapData);
      let popupOffsets = {
        top: [0, 0],
        bottom: [0, -70],
        'bottom-right': [0, -70],
        'bottom-left': [0, -70],
        left: [25, -35],
        right: [-25, -35]
      }
      let popup = new tt.Popup({offset: popupOffsets}).setHTML(data.lokasi[elmt].nama_lokasi);
      marker.setPopup(popup).togglePopup();
      });
      mapData.on('load', () => {
        data.jalur.forEach((elmt, index) => {
          data.jalur.forEach((elmt2, index2) => {
            mapData.addLayer({
              'id' : index + "" + index2,
              'type' : 'line',
              'source' : {
                  'type' : 'geojson',
                  'data': {
                      'type': 'Feature',
                      'geometry': {
                          'type': 'LineString',
                          'coordinates': 
                              [[data.lokasi[elmt].longitude, data.lokasi[elmt].latitude],
                              [data.lokasi[elmt2].longitude, data.lokasi[elmt2].latitude]]
                      }
                  }
              },
              'paint' : {
                  'line-color' : 'red',
                  'line-width' : 5
              } 
            });
        });
      });
    });
    if(status){
      data.jalur.forEach((elmt, index) => {
        if(index !== data.jalur.length-1){
          setTimeout(() => {
            mapData.addLayer({
              'id' : 'path' + index,
              'type' : 'line',
              'source' : {
                  'type' : 'geojson',
                  'data': {
                      'type': 'Feature',
                      'geometry': {
                          'type': 'LineString',
                          'coordinates': 
                              [[data.lokasi[elmt].longitude, data.lokasi[elmt].latitude],
                              [data.lokasi[data.jalur[index+1]].longitude, data.lokasi[data.jalur[index+1]].latitude]]
                      }
                  }
              },
              'paint' : {
                  'line-color' : 'yellow',
                  'line-width' : 3
              } 
            });
          }, 1000*(index+1));
        }
      });
    }
    return () => mapData.remove();
  });

  const clickMap = () => {
    if(status){
      setStatus(false);
    }
    else{
      setStatus(true);
    }
  }

  return (
    <>
      <div ref={mapElement} className="mapDiv"></div>
      <button className="click-map" onClick={clickMap}>Tampilkan Jalur</button>
    </>
  )
}

export default Map
