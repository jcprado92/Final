import React, { useMemo } from 'react'
// import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
// import "../styles/stylin.css"
import "../styles/home.css"
function Home() {
  return (
    <div className='home'>
        <h1>Welcome to Views</h1>
        <video src='/videos/Google_maps.mov' autoPlay loop muted />
    </div>
  )
}

export default Home