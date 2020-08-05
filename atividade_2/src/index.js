import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Arena from './components/questao1/Arena'
import World from './components/questao3/World'
import Arena2 from './components/questao2/Arena'
import Arena3 from './components/questao4/Arena'
import Hero from './components/questao4/Hero'
import Enemy from "./components/questao4/Enemy"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from 'reactstrap';

ReactDOM.render(
  <React.StrictMode>
      <Container>    
    <World >
      <Row>
    <Col><Arena Arena ='USA'/></Col>
    <Col><Arena2 Arena ='Gothan'/> </Col>
    <Col><Arena3 Arena ='Tokio Dome'><Hero name="Raito"/><Enemy name="L"/></Arena3></Col>
    </Row>  
    </World>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
