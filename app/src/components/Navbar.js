import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <nav>
      <div>
        {/* <Link to="/login"> Login </Link> */}
        <Link to="/"> Solidarity </Link>
        <Link to="/all"> AllProject </Link>
        {/* siingle project link just for testing purpose, delete when finish allproject */}
        <Link to="/add"> Create Your Own Project </Link>
      </div>
    </nav>
  </div>
)

export default Navbar;

/*
 confirm path for all projects
*/
