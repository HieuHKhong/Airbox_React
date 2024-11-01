import React from "react";
import logo from "../images/Logo.png"

function Header() {


    return(
        <Navbar />
    )
}

function Navbar() {
    

    return(
        <div className="row">
            <div className="col-lg-1 col-2 Logo">
                     <img src={logo} alt="" className="img-fluid"/>
            </div>

            <div className="col-lg-3 col-10 LogoTitle">
                <h1>AIR<span>BOX</span></h1>
                <p>Hosting Provider</p>
            </div>
            
            <div className="col-lg-8 col-12 Navbar align-content-center d-inline">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Web Hosting</a></li>
                    <li><a>Reseller Hosting</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contacts</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Header;