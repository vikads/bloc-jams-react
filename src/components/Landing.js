import React from 'react';
import'.././styles/Landing.css';
import { Row, Col } from 'react-bootstrap';

const Landing = () => (
  <Row className="landing show-grid">
    <Col xs={12} className="selling points">
      <h1 className="hero-title">Turn the music up!</h1>

      <Col xs={12}>
        <Col sm={8} smOffset={2} xs={12} className="point1">
          <h2 className="point-title">Choose your music</h2>
          <Col sm={8} smOffset={2} xs={12} className="point-description">
            <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
          </Col>
        </Col>
        <Col sm={8} smOffset={2} xs={12} className="point2">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <Col sm={8} smOffset={2} xs={12} className="point-description">
            <p>No arbitrary limits. No distractions.</p>
          </Col>
       </Col>
       <Col sm={8} smOffset={2} xs={12} className="point3">
         <h2 className="point-title">Mobile enabled</h2>
         <Col sm={8} smOffset={2} xs={12} className="point-description">
           <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
         </Col>
       </Col>
      </Col>

    </Col>
  </Row>
);

export default Landing;
