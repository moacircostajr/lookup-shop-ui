import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import '../../App.css'

export default function SimpleMap(props) {
    return (
        <div className="apresentacao-mapas">
            <LoadScript id="script-loader" googleMapsApiKey='AIzaSyBiI059wfQwUh80EpniqcQjlOvBCCQexyo'>
                <GoogleMap id="circle-example"
                            mapContainerStyle={{
                            height: "83vh",
                            width: "46.3vw"
                            }}
                            zoom={7}
                            center={{
                            lat: -3.745,
                            lng: -38.523
                            }}>
                {/* ...Your map components */}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}




