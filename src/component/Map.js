
import { GoogleMap,Marker,useLoadScript} from '@react-google-maps/api';
import { useMemo } from 'react';
import close from '../img/close.svg'

function Map() {
  const {isLoaded} = useLoadScript({googleMapsApiKey:"AIzaSyBkrrhUs05UFfh6HPuHQRhfqhgomQztsUE"})

  if(!isLoaded){
    return <div>Loading...</div>
  }
  return (
    <Maps/>
  );
}

function Maps(){
  const center = useMemo(()=>({
    lat:3.1427,
      lng:101.6951
  }))
  return(
    <GoogleMap
    zoom={10}
    center={{
      lat:3.1427,
      lng:101.6951
    }}
    mapContainerClassName="map-container"
    >
      <Marker position={{lat:3.1427,lng:101.6951}}  />
      
    </GoogleMap>
  )
}

export default Map;