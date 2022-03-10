import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from '../components/Login';
import logo from "./logo.png";
import { headerImage } from '../images';

function Topheader() {
   const [data, setDate] = useState("sachin");
  return (
    <div>
       <img src={headerImage}  alt="logo" className="img-fluid header-bg" />
         <div className="header-logo-bg">
           <img src={headerImage}  alt="logo" className="img-fluid header-bg" />   
         </div>
      <div className="header-baner-bg">  
         <img src={headerImage} className=" img-fluid" alt="logo" />
      </div>
       <header>
       <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
               <a className="navbar-brand logo-section" href="#"><img src={logo} className=" img-fluid" alt="logo" /></a>          
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
               <span className="navbar-toggler-icon"></span>
               <span className="navbar-toggler-icon"></span>
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="mob-navbar">
                  <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Features</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Contact us</a>
                     </li>
                  </ul>
                  <Login headerImages={headerImage}/> 
                  
               </div>
            </div>
         </nav>
       </header>
     
      
    </div>
  )
}

export default Topheader