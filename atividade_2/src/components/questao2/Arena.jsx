import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from './Hero'
import Enemy from './Enemy'

const Arena = (props) => (
  <div>
    <h3>Arena: {props.Arena}</h3>

    <Hero name="Batman" />
    <Enemy name="Coringa" />
  </div>
);

export default Arena;
