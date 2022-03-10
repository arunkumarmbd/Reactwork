import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from '../components/Login';
import logo from "./logo.png";



function ContentRequest() {
  return (
    <div>
     <section class="collected-data">
         <div class="container  pr-75">
            <div class="row d-lg-flex align-items-center justify-content-center">
               <div class="col-lg-12">
                
                  <div class="boxes">
                     <div class="boxes-header">
                        <h2>Request Access to Collected Data</h2>
                     </div>
                     <div class="boxes-content">
                        <p>Promote your professional profile to your network, our business community, and interested parties - like <br />recruiters - with an up-to-date profile on ReachIQ. Update your profile with work history, contact <br />information, and web references. Or, consolidate multiple listings into a comprehensive snapshot of your <br />professional background.</p>
                        <div class="request-btn">
                           <a href="#" class="request-access-btn">Request an access</a>
                        </div>
                     </div>
                  </div>
                  <div class="boxes">
                     <div class="boxes-header">
                        <h2>Request Removal/Deletion from ReachIQ (Opt-Out of Sale)</h2>
                     </div>
                     <div class="boxes-content">
                        <p>Want to remove your existing individual profile from ReachIQ database? Click the button below. If you make this <br />choice, all information contained in your profile will be removed and your record will become unavailable in our <br />products as soon as possible. Removing your individual profile also serves as an opt-out of the sale of <br />information that was contained in your profile. As a company policy, ReachIQ does not remove company <br />information from our search engine.</p>
                        <div class="request-btn">
                           <a href="#" class="request-access-btn">Request Removal</a>
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

export default ContentRequest