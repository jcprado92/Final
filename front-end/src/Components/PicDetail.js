import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const API = process.env.REACT_APP_API_URL

function PicDetail() {
    const [ pic, setPic ] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/pics/${id}`)
        .then(res => setPic(res.data.payload))
        .catch(err => console.error(err))
    }, [pic])

    const deletePic = () => {
      axios.delete(`${API}/pics/${id}`)
      .then(navigate('/pics'))
      .catch(err => console.error("error"))
    }

    const handleDelete = () => {
      deletePic()
    }
    
  return (
    <div>
        <h2>{pic.name}</h2>
        <h3>{pic.location}</h3>
        <h4>{pic.is_favorite ? "Favorite" : "Not a favorite"}</h4>
        <Link to={`/pics/${id}/edit`}><button>Edit Pic</button></Link>
        <button onClick={handleDelete}>Delete This Pic</button>
        <Link to="/pics"><button>Nevermind</button></Link>
    </div>
  )
}

export default PicDetail