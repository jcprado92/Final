import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
        <Link to="/">Catch</Link>
        <Link to="/pics">Yics</Link>
    </div>
  )
}

export default Nav