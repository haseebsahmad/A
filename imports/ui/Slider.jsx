import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

export const Slider = () => {
 
  return (
    <div className="App"> 
      <div className="carousel slide" data-ride="carousel" id="carousel-1">
      <img className="logo" src="/assets/img/Aangan_238x238 2.png"/>
      <button className="AddProperty">Add Property+</button>
      <button className="SignIn">Sign In</button>
      <button className="SignUp">Sign Up</button>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100 d-block" src="assets/img/Rectangle_20.png" alt="Slide Image" loading="eager" />
              <div className="SearchBar ">
            <div>
          <button className="btnBUY">BUY</button>
          <button className="btnRENT">RENT</button>
          <button className="btnInvest">INVEST</button>
           </div>
           <div className="propertymenu">
             <p className="tag1">Location</p>
             <p className="tag2">Where to rent?</p>
             <p className="tag1">Price Range</p>
             <p className="tag2">Add Price</p>
           </div>
           <div className="propertymenu1">
             <p className="tag1">Area</p>
             <p className="tag2">Specific Area</p>
             <p className="tag1">Size Range</p>
             <p className="tag2">Add Size</p>
           </div>
           <div className="propertymenu2">
             <p className="tag1">Type</p>
             <p className="tag2">Property type</p>
             <p className="tag1">Beds</p>
             <p className="tag2">No. of Beds</p>
           </div>
           <div className="propertymenu3">
           </div>
           <div className="propertymenu4">
             <div style={{ width:"60%", marginLeft:"20%"}}>
             <img style={{Zindex:"1",width:"100%"}} src="/assets/img/Rectangle8.png"/>
             </div>
           </div>
          </div>
          
          <img className="logo1" src="/assets/img/NewAngan1.png"/>
              </div>
            <div className="carousel-item">
              <img class="img-fluid w-100 d-block shadow-lg" src="assets/img/Rectangle_20.png" alt="Slide Image" loading="eager" />
              <div className="SearchBar1" >
                <div style={{ width:"100%"}}>
                <img className="cirMenu2" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu1" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu3" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu4" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu5" src="/assets/img/Aangan_238x2383.png"/>
                <img className="cirMenu6" src="/assets/img/Aangan_238x2383.png"/>
                  </div>
                
              </div>
              </div>
        </div>
        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon text-light"></span><span class="sr-only">Next</span></a></div>
        <ol class="carousel-indicators" data-bss-hover-animate="flash">
        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li> 
        </ol>
    </div>
    

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    </div>
  );
};
