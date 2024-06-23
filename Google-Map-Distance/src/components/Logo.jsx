import React from 'react';
import "../css/Navbar.css";
import logo from "../assets/Graviti_Logo.png";
import reload from "../assets/reload.png";
import lock from "../assets/lock.png";
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
        <div>
        <div className='mobile-view' >
         <p style={{fontSize:"12px",paddingLeft:"6px"}}>A<span style={{fontSize:"16px"}}>A</span></p>
         <p  className="web"><img src={lock} alt="lock-icon"style={ {width:"15px", height:"15px"}}></img> graviti.com</p>
       <a href="/"  className="reload"> <img src={reload} className="reload" alt="reloading"></img></a> 
        </div>
        </div>
    </div>
  )
}

export default Navbar