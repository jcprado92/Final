import { useMemo } from "react"
import { GoogleMap, Marker } from "@react-google-maps/api"

const Map = () => {
    
    const center = useMemo(() => ({lat: 40.730824, lng: -73.997330}), [])
    
    return(
       <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
       <Marker position={{lat: 40.730824, lng: -73.997330}}/>
       </GoogleMap>
    )
}

export default Map