import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from '../components/Login';
import logo from "./logo.png";

import bannerImages from '../images/banner-images1.png';
import vectorImages from '../images/over-vector.png';


function Banner() {
  return (
    <div>
     <section className="header-banner">
      <div className="container">
          <div className="row d-lg-flex align-items-center justify-content-start">
              <div className="col-lg-6 ">
                 <p className="heading-small">Privacy Center</p>
                 <h1 className="main-title">Manage Your ReachIQ</h1>
                 <p>Claim your personal or company profile, request to see <br />what data has already been collected, request to <br />remove data, and dive into our privacy policy.</p>
                     <div className="ul-listed">
                     <ul class="claim-listed">
                       <li>Claim your personal</li>
                       <li>Claim your personal</li>
                       <li>Claim your personal</li>
                     </ul>
                     </div>
              </div>
              <div className="col-lg-6">
                <div className="outer-circle">
                   <div className="inner-circle">
                   <img src={bannerImages} className=" img-fluid" alt="Banner_images" />                    
                     <div className="over-circle"  data-aos="zoom-out" data-aos-duration="2000">
                        <div className="over-inner-circle">
                        <img src={vectorImages} className=" img-fluid" alt="Banner_images" /> 
                        </div>                              
                     </div>
            </div>
         </div>
      </div>
          </div>
        </div>
     </section>
      
    </div>
  )
}

export default Banner