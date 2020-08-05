import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Arena = (props) => (
  <div>
    <h3>Arena: {props.Arena}</h3>
    <h3>{props.arena}</h3>
    {React.Children.map(props.children, (arena) => {
      return React.cloneElement(arena, { ...props });
    })}
  </div>
);

export default Arena;
