import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Feature",
      child : [
          { title : "Contest Pools", link : "/" },
          { title : "Gamified Stacking", link : "/" },
          { title : "Decentralized Data Oracal", link : "/" },
          { title : "The CROSS-O Token", link : "/" }
      ]
    },
    { id : 2, title : "About Us",
      child : [
          { title : "Contact Us", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Privacy Policy", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section ">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="mt-5 mb-5">
                <h5 className="mt-0 mb-3">CROSS-O</h5>
                <h6 className=" font-weight-normal">CROSS-O is a daily fantasy sports platform that brings trust-less play-to-earn gaming to everyone.</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="mt-5 mb-3">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="mt-5 mb-3">The $CROSS-O Token</h6>
                <p className=" f-14">Staking</p>
                <h6 className=" pb-2">Tokenomic</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <div className="text-center">
              <p className="mb-0 f-15">2022 © CROSS-O. Design by Name</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;