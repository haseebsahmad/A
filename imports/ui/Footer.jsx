import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export const Footer = () => {
  return (
   
    <div className="footer">
      <div className="f1">
      <img style={{padding:"30px"}} src="/assets/img/Aangan_238x238 2.png"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. </p>
      </div>
      <div className="f2">JOIN AS:</div>
      <div className="f3">
            PRIVATE USER
          </div>
      <div className="f4">
            REAL ESTATE AGENT
          </div>    
      <div className="f5">
            REAL ESTATE COMPANY
          </div>   
      <div className="f6">
        Quick Link
      </div>
      <div className="f7">
        ABOUT
      </div>
      <div className="f7">
        Contact us
      </div>
      <div className="f7">
        Plots
      </div>
      <div className="f7">
        Privacy
      </div>
      <div style={{ position:"absolute", width:"100%", height:"10%", marginTop:"22%"}}>
      <hr style={{backgroundColor:"white", width:"50%"}} />
      <h style={{marginLeft:"40%"}}>&copy; Copyright 2021. Aangan. All Rights Reserved</h>
      </div>
    </div>
  );
};
