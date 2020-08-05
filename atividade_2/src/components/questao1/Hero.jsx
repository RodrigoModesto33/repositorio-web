import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Captain from '../../img/hero/captain.png'


const Hero = (props) => (
    <div className="justify-content-md-center">
      <h2 style={{ fontFamily: "fantasy" }}>Hero: {props.name}</h2>
      <img src={Captain} width="100" height="100"/>
    </div>
  );
  export default Hero;