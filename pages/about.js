import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">CROSS-O is bringing fantasy sports to Terra by utilizing Chainlink, Band protocol, and Supra decentralized oracles, bringing fantasy sports closer to transforming into a more transparent, accessible, and cheaper ecosystem for users</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">CROSS-O is a daily fantasy sports plateform</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">Transparency will break the cycle of mistrust surrounding online games and breathe new life into the industry. Technology and innovation will meet the passion of sport, and influence online gaming.</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">To deliver real digital ownership, transparency, liquidity, and decentralization, and to offer people new ways to communicate and express their passion for the sport. It will be fascinating to see the masses adopt CROSS-O, boosting its potential and being a part of its growth.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;