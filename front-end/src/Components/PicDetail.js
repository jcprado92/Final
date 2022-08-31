import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const API = process.env.REACT_APP_API_URL
function PicDetail() {
    const [ pic, setPic ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${API}/pics/${id}`)
        .then(res => setPic(res.data.payload))
        .catch(err => console.error(err))
    }, [pic])
  return (
    <div>
        <h2>{pic.name}</h2>
        <h3>{pic.location}</h3>
        <h4>{pic.isFavorite ? "Favorite" : "Not a favorite"}</h4>
    </div>
  )
}

export default PicDetail