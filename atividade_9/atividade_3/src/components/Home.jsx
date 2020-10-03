import React, { Component } from "react";
import imgFundo from "../CRUD.png"
export default class Home extends Component {
  render() {
    return (
      <div>
        <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: "1000px" }} src = {imgFundo}/>
      </div>
    )
  }
}
