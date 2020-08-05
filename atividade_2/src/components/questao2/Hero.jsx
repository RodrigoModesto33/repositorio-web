import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Batman from '../../img/hero/batman.png'


const Hero = (props) => (
    <div className="justify-content-md-center">
      <h2 style={{ fontFamily: "fantasy" }}>Hero: {props.name}</h2>
      <img src={Batman} width="100" height="100"/>
    </div>
  );
  export default Hero;