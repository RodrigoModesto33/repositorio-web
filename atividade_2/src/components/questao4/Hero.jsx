import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Raito from '../../img/hero/raito.jpg'

const Hero = (props) => (
    <div className="justify-content-md-center">
      <h2 style={{ fontFamily: "fantasy" }}>Hero: {props.name} em: {props.Arena} </h2>
      <img src={Raito} width="100" height="100"/>
    </div>
  );
  export default Hero;