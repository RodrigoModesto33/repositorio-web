import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import L from '../../img/enemy/l.png'

const Enemy = (props) => (
    <div style={{ alignItems: "center" }}>
      <h2 style={{ fontFamily: "fantasy" }}>Enemy: {props.name} em: {props.Arena}</h2>
      <img src={L} width="100" height="100"/>
    </div>
  );
  export default Enemy;