import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function NavBar( {currentUser} ){
  return(
    <div id='navBar' className='flexContainer'>
      <NavLink className="navLinks" to="/" exact>Home</NavLink>
      <NavLink className="navLinks" to="/read" exact>Read</NavLink>
      <NavLink className="navLinks" to="/watch" exact>Watch</NavLink>
      <NavLink className="navLinks" to="/listen" exact>Listen</NavLink>
      {currentUser ? <a>Log out</a> : <NavLink className="navLinks" to="/login" exact>Login</NavLink>}
    </div>
  )
}

export default NavBar