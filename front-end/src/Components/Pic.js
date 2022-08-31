import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"
function Pic({ pic, id }) {
  return (
    <div>
        <Link to={`/pics/${id}`}><h2>{pic.name}</h2></Link>
        <Link to={`/pics/${id}`}><img src={pic.url} alt={pic.name} className="image"></img></Link>
        <h3>{pic.location}</h3>
        <p>{pic.is_favorite ? "🌊" : ""}</p>
    </div>
  )
}

export default Pic