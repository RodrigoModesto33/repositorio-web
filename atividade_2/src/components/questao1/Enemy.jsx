import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Thanos from '../../img/enemy/Thanos.png'

const Enemy = (props) => (
    <div style={{ alignItems: "center" }}>
      <h2 style={{ fontFamily: "fantasy" }}>Enemy: {props.name}</h2>
      <img src={Thanos} width="100" height="100"/>
    </div>
  );
  export default Enemy;