import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/Profile.svg";

export  const  Navbar = () => {
    return(
        <nav className="navigationBar">
            <Link to="/" className="heading" id="home-element">Home</Link>
            <Link to="/Login" className="heading">Login </Link>
           <div className="alignImg"><Link to="/account"><img src={profile} alt="Profile" className="profileImage"/> </Link></div>
        </nav>
    )
}