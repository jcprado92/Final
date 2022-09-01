import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
        <Link to="/">Catch</Link>
        <Link to="/pics">Yics</Link>
        <Link to="/pics/new">Add New Pic</Link>
    </div>
  )
}

export default Nav