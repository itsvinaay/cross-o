import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Betting Pool", desc : "2% of every betting pool is permanently removed from the network by burning the equivalent amount of $FURY tokens, at the time of reward distribution." },
    { title : "Price of $CROSS-O", desc : "When the price of $FURY is high, the rate of burn declines, leading to market stabilization, helping bettors predict potential winnings effectively" },
    { title : "Stakers", desc : "Stakers are entitled to 25% of the staking rewards generated" },
    { title : "Liquidity", desc : "Rewards to Liquidity Providers will help with mitigating Impermanent Loss" },
    { title : "Rake Fee Distribution", desc : "$CROSS-O tokens are used to pay out 50% of the Rake Fees to both Staker and Liquidity Providers" },
    { title : "Reward Breakup", desc : "80% of the rewards are distributed among all staking pools, 19% to the top pool and 1% to the owner" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
              <p className="text-muted">The $CROSS-O token is Fanfury's ecosystem token and is used for contest participation, rake collection & distribution, staking, liquidity, and governance.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;