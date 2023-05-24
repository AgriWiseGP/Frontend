import React from 'react'
import { useEffect } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const Map = (props) => {

    useEffect(() => {  
        const map = tt.map({
        key: process.env.REACT_APP_TOMTOM_API_KEY,
        container: 'map',
        center: [props.longitude ,  props.latitude],
        zoom: 8,
      });
        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());
  
 
      const marker = new tt.Marker({ color: 'red' });
      const popup = new tt.Popup({closeButton: true}).setHTML("Your location");

      if (props.latitude && props.longitude) {
        marker.setLngLat([props.longitude, props.latitude]).setPopup(popup).addTo(map);
      //  map.setCenter([longitude, latitude])
    } else {
        console.log('Geolocation is not supported by your browser');
    }
    const markers = [];
    props.places.forEach((place) => {
        markers.push(
        {position: [place.long, place.lat], title: place.name}
        )
    });
  
      markers.forEach((marker) => {
        const popup = new tt.Popup({closeButton: true}).setHTML(marker.title);
  
        new tt.Marker({ color: 'green' }).setLngLat(marker.position).setPopup(popup).addTo(map);
        map.setCenter(marker.position);

      //  const marker = new tt.Marker().setLngLat(map.getCenter()).addTo(map)
    });


      return () => {
        map.remove();
      };
    }, [props.latitude, props.longitude]); 
  
    
  return (
    <>
    <div id="map" className='m-[20px] h-[200px]'></div>
    </>
  )
}
export default Map