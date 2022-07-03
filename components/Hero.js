import React from "react";
import { useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section position-relative">
      <div class="bg-tint mb-5">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/Banner.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/Banner.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/images/Banner.png" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid">
  <div class="row">
    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="/images/Group Members.png"/>
        <div class="card-block">
       </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="/images/Group Members.png"/>
        <div class="card-block">
       </div>
      </div>
    </div>
  </div>
</div> */}
      <div className="container heading">
        <button
          type="button"
          class="btn bg-red-light shadow text-danger font-weight-bold"
        >
          LIVE
        </button>
      </div>

      <div className="container mt-5 ">
        <div className="row">
          <div className="col-lg-6 justify-content-center justify-content-lg-end d-flex">
            <div class="card forge img-fluid justify-content-center mb-5">
              <img
                src="/images/Forge.png"
                class="card-img-top img-collection"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  FORGE <BiChevronRight />
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 justify-content-center justify-content-lg-start d-flex">
            <div class="card forge img-fluid mb-5">
              <img
                src="/images/Webapp.png"
                class="card-img-top img-collection img-fluid"
                alt="..."
              />
              <div class="card-body d-inline">
                <h5 class="card-title">
                  EARN WEBAPP <BiChevronRight />
                </h5>
              </div>
              {/* <div class="card p-3 mb-5">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div class="icon shadow bg-info"> <i class="bx bxl-mailchimp"></i> </div>
                    </div>
                    
                </div>
                <div class="card-body mt-5">
                    <h3 class="heading">EARN WEBAPP</h3>
                </div>  */}
            </div>
          </div>
        </div>

        {/* <div class="row">
        <div class="col-lg-6">
            <div class="card forge mb-2 ">
                <div class="d-flex justify-content-end">
                    <div class="d-flex flex-row align-items-center">
                 
  <img src="/images/iphone.png" class="rounded-circle shadow img-collection img-fluid" alt="..."/>
                         </div>
                
                    
                </div>
                <div class="card-body mt-2">
                    <h3 class="heading">Choose</h3>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card forge justify-content-center mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-start">
  <img src="/images/Intro.jpeg" class="rounded-circle shadow img-collection img-fluid" alt="..."/>
                    </div>
                </div> 
                <div class="card-body mt-2">
                    <h3 class="heading">Choose </h3>
                </div>
            </div>
        </div>
    </div> */}
        <div className="container heading mt-5 mb-5 ">
          <button type="button" class="btn bg-gray shadow font-weight-bold">
            Android & IOS Apps
          </button>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card p-3 mb-2 border-0" style={{ background: "transparent" }}>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img
                    src="/images/iphone.png"
                    class="rounded-circle shadow img-collection img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <div class="card-body mt-2  border-0">
                <h3 class="heading">Choose a match from our list of sports</h3>
                <h6 class="heading">
                  Choose from a range of 5 different sports for a global
                  audience
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3 mb-2  border-0" style={{ background: "transparent" }}>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img
                    src="/images/Intro.jpeg"
                    class="rounded-circle shadow img-collection img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <div class="card-body mt-2  border-0">
                <h3 class="heading">Choose a match from our list of sports</h3>
                <h6 class="heading">
                  Choose from a range of 5 different sports for a global
                  audience
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3 mb-2  border-0" style={{ background: "transparent" }}>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <img
                    src="/images/pvp.jpg"
                    class="rounded-circle shadow img-collection img-fluid"
                    alt="..."
                  />
                </div>
              </div>
              <div class="card-body mt-2">
                <h3 class="heading">Choose a match from our list of sports</h3>
                <h6 class="heading">
                  Choose from a range of 5 different sports for a global
                  audience
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container height mt-5 mb-5">
        <p className="font-size heading txt--gradient-orange  font-weight-bold text-gradient-primary secondary-font">
          {" "}
          All your <br></br>favorite teams <br className="mb-5"></br>from your
          <br className="mb-5"></br> favorite <br></br> leagues
        </p>
      </div>
      <div className="container heading mt-5 mb-5 ">
        <button
          type="button"
          class="btn font-weight-bold text-muted font-size-muted"
        >
          Play in over 2,000 of the world’s leading sports leagues
        </button>
      </div>
      <div class="container  card bg-white">
        <div class="row mt-5 mb-5" style={{ alignItems: "center" }}>
          <div class="col-xl-3 col-lg-6">
            <div class="card stats mb-4 mb-xl-0">
              <img src="/images/Premier.png" class="img-fluid" alt="..." />
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card stats mb-4 mb-xl-0">
              <img src="/images/laliga.png" class="img-fluid" alt="..." />
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card stats mb-4 mb-xl-0">
              <img src="/images/mlb.png" class=" img-fluid" alt="..." />
            </div>
          </div>
          <div class="col-xl-3 col-lg-6">
            <div class="card stats mb-4 mb-xl-0">
              <img src="/images/nba.png" class=" img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container  height mt-5 mb-5">
        <div className="container padding-1 heading mt-5 mb-3 ">
          <button type="button" class="btn bg-gray shadow font-weight-bold ">
            BUILT ON POLYGON
          </button>
        </div>
        <p className="font-size heading font-weight-bold secondary-font">
          {" "}
          Daily Fantasy <br></br>Sports Platform <br></br>Built on Polygon
        </p>
        <p
          mt-5
          className="align-items-center font-size-p heading text-muted secondary-font"
        >
          Decentralized Data Oracles, Rigid Smart<br></br> Contracts, Low Rake
          Fees, and Epic<br></br> Payouts
        </p>
        <div className="container heading mt-5 mb-3 ">
          <button
            type="button"
            class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold "
          >
            Learn more about our technology <BiChevronRight />
          </button>
        </div>
      </div>

      {/*  */}

      <article className="vector">
        <div class="container-fluid">
          {/* <div class="row">
            <div class="col">
                <div class="title-section">
                    <h1>Basic Sticky Sidebar with Bootstrap 4</h1>
                </div>
            </div>
        </div> */}
          <div class="row px-5">
            <div class="col-lg-4">
              <div class="content-section ">
                <div
                  class="justify-content-center align-items-center height mt-5 bg-image hover-overlay hover-zoom hover-shadow ripple"
                  data-aos="zoom-out-up"
                >
                   <div class="card cardss bg-overlay-8 justify-content-center align-items-center mb-4">
              <div class=" text-white margin-1 text-center">
                <p class="card-text text-white font-size heading font-weight-bold secondary-font ">
                Sports <br></br> Team <br></br>Gamified <br></br>staking<br></br> Pool
                </p>
                     <button
                        type="button"
                        class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold  mb-5"
                      >
                        Learn more about it <BiChevronRight />
                      </button>
              </div>
            </div>
            
                </div>
                <div
                  class="justify-content-center align-items-center height fancy mt-5"
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                >
                  <img
                    src="/images/player.png"
                    class="card cards img-fluid"
                    alt="..."
                  />
                </div>

                <div
                  class="justify-content-center align-items-center height fancy mt-5"
                  data-aos="zoom-out-up"
                  data-aos-anchor-placement="top-bottom"
                >
                        <div class="card cardss bg-overlay-9 justify-content-center align-items-center mb-4">
              <div class=" text-white margin-1 text-center">
                <p class="card-text text-white font-size heading font-weight-bold secondary-font ">
                Sustainable <br></br> Incentivised <br></br>Liquidity <br></br> Reward <br></br>Program
                </p>
                  
              </div>
            </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="sidebar-item">
                <div class="make-me-sticky">
                  <div className="container  height mt-5 mb-5">
                    <div className="container padding-1 heading mt-5 mb-3 ">
                      <button
                        type="button"
                        class="btn bg-gray shadow font-weight-bold "
                      >
                        BUILT ON POLYGON
                      </button>
                    </div>
                    <p className="font-size heading font-weight-bold text-dark secondary-font">
                      {" "}
                      Daily Fantasy <br></br>Sports Platform <br></br>Built on
                      Polygon
                    </p>
                    <p
                      mt-5
                      className="align-items-center font-size-p heading text-muted secondary-font"
                    >
                      Decentralized Data Oracles, Rigid Smart<br></br>{" "}
                      Contracts, Low Rake Fees, and Epic<br></br> Payouts
                    </p>
                    <div className="container heading mt-5 mb-3 ">
                      <button
                        type="button"
                        class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold "
                      >
                        Learn more about our technology <BiChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="content-section">
                <div
                  class="justify-content-center align-items-center height mt-5"
                  data-aos="zoom-out-up"
                >
                
                </div>
                <div class="justify-content-center align-items-center height mt-5">
                  <img
                    src="/images/player.png"
                    class="card img-fluid"
                    alt="..."
                    data-aos="zoom-out-up"
                  />
                </div>
                <div
                  class="justify-content-center align-items-center height mt-5"
                  data-aos="zoom-out-up"
                >
                  <img
                    src="/images/player.png"
                    class="card img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  class="justify-content-center align-items-center height mt-5"
                  data-aos="zoom-out-up"
                >
                  <img
                    src="/images/player.png"
                    class="card img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-5">
              <div class="sidebar-item">
                <div class="make-me-sticky">
                  <div className="container card bg-white height mt-5 mb-5">
                   
                    <p className="font-size heading font-weight-bold text-dark secondary-font mt-5">
                      {" "}
                    We have an <br></br>industry low rake<br></br> fees of 5%
                    </p>
                 
                    <div className="container heading mt-5 mb-3 ">
                      <button
                        type="button"
                        class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold mb-5"
                      >
                        Learn more about our tokenomics <BiChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 px-5">
              <div class="content-section">
                <div
                  class="justify-content-center align-items-center height mt-5"
                  data-aos="zoom-out-up"
                >
                       <div class="card cardss bg-overlay-10 justify-content-center align-items-center mb-4">
              <div class=" text-white margin-1 text-center">
                <p class="card-text text-white font-size heading font-weight-bold secondary-font ">
                Stakers & Liquidity <br></br>Providers
                </p>
                <p
          mt-5
          className="align-items-center font-size-p heading text-muted secondary-font"
        >
          Stakers & Liquidity Providers share 50% of the Rake Fees,<br></br>  equally amongst themselves
         
        </p>
                     <button
                        type="button"
                        class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold  mb-5"
                      >
                        See how Rake works <BiChevronRight />
                      </button>
              </div>
            </div>
                </div>
                <div class="justify-content-center align-items-center height mt-5">
                  <img
                    src="/images/samsung.png"
                    class="card img-fluid"
                    alt="..."
                    data-aos="zoom-out-up"
                  />
                </div>
                <div
                  class="justify-content-center fancy align-items-center height mt-5"
                  data-aos="zoom-out-up"
                >
                             <div class="card cardss bg-overlay-11 justify-content-center align-items-center mb-4">
              <div class=" text-white margin-1 text-center">
                <p class="card-text text-white font-size heading font-weight-bold secondary-font ">
                Deflationary Tokenomics & Value Accrual
                </p>
                <p
          mt-5
          className="align-items-center font-size-p heading secondary-font"
        >
          The Fury Token is geared for growth through a unique value accrual mechanism,<br></br> that relies on the price
         
        </p>
                     <button
                        type="button"
                        class="btn bg-gray font-size-p rounded-1 shadow font-weight-bold  mb-5"
                      >
                        How this works <BiChevronRight />
                      </button>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/*  */}

      {/* <div className="container border ">
  
        <div className="row scroll ">
          <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>

          <div className="col-lg-4 built sticky fixed-bottom">
            <div className="container mt-5 mb-5">
              <div className="container mt-3 mb-3 " >
                <button
                  type="button"
                  class="btn bg-gray shadow font-weight-bold "
                >
                  MATCH CONTEST POOLS
                </button>
                <p className="font-size-1 font-weight-bold secondary-font mt-2">
                  Player vs Player and Large Contest Pools
                </p>
                <p
                  mt-4
                  className="align-items-center font-size-2 text-muted secondary-font"
                >
                  Fanfury offers two contest modes - Player vs Player up to 10
                  teams, and Large Pools Contests with up to 5000 teams, both
                  with a flat 5% Rake Fee
                </p>
                <button
                  type="button"
                  class="btn bg-gray font-size-2 rounded-1 shadow font-weight-bold "
                >
                  See Contest Pools <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img
                src="/images/contests.png"
                class="card img-fluid"
                alt="..."
              />
            </div>
          </div>
        <div className="row d-flex justify-content-between">
        <div className="col-lg-4 ">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>  <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
        <div className="col-lg-4 ">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>  <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>
        </div>
        </div>
      </div> */}

      {/*  */}
      <div className="container heading mt-5 mb-5 ">
        <div class="row">
          <div class="col-md-4">
            <div class="card bg-overlay-3 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white middle ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="card bg-overlay-4 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-overlay-5 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="rounded-1 padding-1 mx-3 card text-justify-center text-align-center bg-black">
        <div className="container mt-5 mb-3 margin-1 ">
          <button
            type="button"
            class="btn bg-gray text-gradient-primary text-white shadow font-weight-bold "
          >
            THE BIG DIFFERENCE
          </button>

          <p className="font-size font-weight-bold text-white secondary-font">
            What makes us <br></br>different from the <br></br>rest?
          </p>
          <p
            mt-5
            className="align-items-center font-size-p  text-muted secondary-font"
          >
            These are some of the simple things that make us a <br></br>unique
            and awesome place, you just can't replace.
          </p>
          <p className="font-size-p font-weight-bold text-white secondary-font">
            Community ownership and governance.<br></br>A way to own the game
            you participate in and be the<br></br> house.
          </p>
          <p
            mt-5
            className="align-items-center font-size-p  text-muted secondary-font"
          >
            By giving our entire Rake Fee to our Stakers and Liquidity <br></br>
            Providers, we hand over all profits to the people holding <br></br>
            our tokens
          </p>
          <p className="font-size-p font-weight-bold text-white secondary-font">
            A Deflationary Tokenomics Model.<br></br>
            Having a value accrual mechanism that acts on price.
          </p>
          <p
            mt-5
            className="align-items-center font-size-p  text-muted secondary-font"
          >
            By tying our burn mechanism to the price of the token, we ensure
            <br></br>
            that the number of tokens we burn, is inversely proportional to
            <br></br> its price
          </p>
        </div>

        {/* <div class="card justify-content-center align-items-center">
  <img class="card-img" src="/images/shutterstock.jpg" alt="a snow-capped mountain range"/>
  <div class="card-img-overlay justify-content-center text-white">
    <h2 class="card-title font-weight-bold"> Introduction to CROSS-O</h2>
    <p class="card-text text-muted font-weight-bold">  Fanfury is bringing fantasy sports to Terra by utilizing decentralized 
        oracles, bringing fantasy sports closer to transforming into a more
        transparent, accessible, and cheaper ecosystem for users.</p>
    <a href="#" class="btn btn-primary btn-lg">Read about it </a>
  </div>
</div> */}
        {/* <div className=" container card bg-overlay style">
        <p className="font-size font-weight-bold text-white">
        Introduction to CROSS-O
        </p>
        <p mt-5 className=" font-size-p  text-muted secondary-font">
       
A gamified web app for Staking, Liquidity, Airdrops, & Swaps
        </p>
        <button type="button" class="btn btn-primary btn-lg">Read about it</button>
        </div>  */}

        <div className="container mb-5">
          <div class="card bg-overlay-1 justify-content-center align-items-center mt-5">
            <div class="card-img-overlay text-white margin-1">
              <h2 class="card-title font-weight-bold">
                {" "}
                Introduction to CROSS-O
              </h2>
              <p class="card-text text-white ">
                {" "}
                Fanfury is bringing fantasy sports to Terra by utilizing
                decentralized oracles, bringing fantasy sports closer to
                transforming into a more transparent, accessible, and cheaper
                ecosystem for users.
              </p>
              <a href="#" class="btn btn-primary btn-lg">
                Read about it{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="container mt-4  mb-5">
              <p className="font-size heading font-weight-bold secondary-font">
                A gamified web app for Staking, Liquidity, Airdrops, & Swaps
              </p>
              <div className="container heading mt-5 mb-3 ">
                <button
                  type="button"
                  class="btn bg-gray shadow font-weight-bold "
                >
                  LOCKER ROOM - THE WEBAPP
                </button>
              </div>
              <p
                mt-5
                className="align-items-center font-size-p heading text-muted secondary-font"
              >
                Locker Room is our web application - your gateway to claiming
                Team Staking Pools, manage future Airdrops, Marketing Rewards,
                Staking, Liquidity, and more.
              </p>
              <div className="container heading mt-5 mb-3 ">
                <button
                  type="button"
                  class="btn bg-gray font-size-p rounded-1 shadow text-muted"
                >
                  Locker Room Is coming soon <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/mockup.png" class="card img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img src="/images/player.png" class="card img-fluid" alt="..." />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="container mt-5 mb-5">
              <div className="container mt-3 mb-3 ">
                <button
                  type="button"
                  class="btn bg-gray shadow font-weight-bold "
                >
                  MATCH CONTEST POOLS
                </button>
                <p className="font-size-1 font-weight-bold secondary-font mt-2">
                  Player vs Player and Large Contest Pools
                </p>
                <p
                  mt-4
                  className="align-items-center font-size-2 text-muted secondary-font"
                >
                  Fanfury offers two contest modes - Player vs Player up to 10
                  teams, and Large Pools Contests with up to 5000 teams, both
                  with a flat 5% Rake Fee
                </p>
                <button
                  type="button"
                  class="btn bg-gray font-size-2 rounded-1 shadow font-weight-bold "
                >
                  See Contest Pools <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="justify-content-center align-items-center height mt-5">
              <img
                src="/images/contests.png"
                class="card img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container height mt-5 mb-5">
        <div className="container padding-1 heading mt-5 mb-3 ">
          <button type="button" class="btn bg-gray shadow font-weight-bold ">
            A Local Team
          </button>
        </div>
        <p className="font-size heading  txt--gradient-orange text-gradient-primary font-weight-bold secondary-font">
          Meet the Team
        </p>
        <p className="align-items-center text-muted font-weight-bold font-size-p heading secondary-font">
          Fanfury was started by Adrian, Shubhendu, & Vivek, a group of avid
          <br></br> fantasy sports gamers
        </p>
      </div>

      <div className="container heading mt-5 mb-5 ">
        <div class="row">
          <div class="col-md-4">
            <div class="card bg-overlay-3 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white middle ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-overlay-4 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-overlay-5 image justify-content-center align-items-center mt-5 mb-4">
              <div class="card-img-overlay text-white margin-1">
                <h2 class="card-title font-weight-bold">
                  Introduction to CROSS-O
                </h2>
                <p class="card-text text-white ">
                  Fanfury is bringing fantasy sports to Terra by utilizing
                  decentralized oracles, bringing fantasy sports closer to
                  transforming into a more transparent, accessible, and cheaper
                  ecosystem for users.
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  Read about it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>

      <div
        className="card bg-overlay-6 mt-5  mx-3"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="row">
          <div className="col-lg-6">
            <div
              className="container mt-5 px-5 margin-1 mb-5"
              style={{ padding: "12%", margin: "8%" }}
            >
              <button
                type="button"
                class="btn bg-gray text-gradient-primary text-white shadow font-weight-bold "
              >
                THE BIG DIFFERENCE
              </button>
              <p className="font-size font-weight-bold secondary-font">
                Bigger Winnings Larger Payouts
              </p>
              <p
                mt-5
                className="align-items-center font-size-p font-weight-bold  text-white secondary-font"
              >
                Win $FURY in head to head & large contest pools Earn $FURY with
                your own Team Staking Pools
              </p>
              <div className="container mt-5 mb-3 ">
                <button
                  type="button"
                  class="btn bg-white font-size-p rounded-1 shadow font-weight-bold  "
                >
                  Downloade Whitepaper <BiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="d-flex justify-content-center align-items-center height mt-5">
              <img
                src="/images/iphone2.png"
                class="card img-fluid bounce2"
                alt="..."
                style={{
                  background: "transparent",
                  height: "540px",
                  margin: "-10px",
                  width: "200px",
                }}
              />
              <img
                src="/images/mobile1.png"
                class="card img-fluid "
                alt="..."
                style={{
                  background: "transparent",
                  height: "560px",
                  width: "200px",
                }}
              />
            </div>
            <div class="d-flex justify-content-center align-items-center height mt-5"></div>
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-lg-6">
            <div class="card forge mb-2 ">
                <div class="d-flex justify-content-end">
                    <div class="d-flex flex-row align-items-center">
                 
  <img src="/images/iphone.png" class="rounded-circle shadow img-collection img-fluid" alt="..."/>
                         </div>
                
                    
                </div>
                <div class="card-body mt-2">
                    <h3 class="heading">Choose</h3>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card forge justify-content-center mb-2">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-start">
  <img src="/images/Intro.jpeg" class="rounded-circle shadow img-collection img-fluid" alt="..."/>
                    </div>
                </div> 
                <div class="card-body mt-2">
                    <h3 class="heading">Choose </h3>
                </div>
            </div>
        </div>
    </div> */}

      {/* <div class="container bg-overlay mt-5">
	<div class="row text-center">
    <h1>Introduction to CROSS-O</h1>
		<h1>CROSS-O is bringing fantasy sports to Terra by utilizing decentralized</h1>
        <h4>You can just use the "<strong>.bg-overlay</strong>" oracles, bringing fantasy sports closer to transforming into a more transparent,
         accessible, and cheaper ecosystem for users.</h4>
        
        <button type="button" class="btn btn-primary btn-lg">Read about it</button>
	</div>
</div>  */}

      {/* <Row className='align-items-center'>
          <Col lg={12}>
            <div className='showcase'>
            <img src="/images/Vector.jpg" class=" w-100" alt="Slide 2"/>
              
            </div>
           <div class="container-lg my-3">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
     
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        
      
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/images/Banner.png" class="d-block w-100" alt="Slide 1"/>
            </div>
            <div class="carousel-item">
                <img src="/images/Banner.png" class="d-block w-100" alt="Slide 2"/>
            </div>
            <div class="carousel-item">
                <img src="/images/Banner.png" class="d-block w-100" alt="Slide 3"/>
            </div>
        </div>

       
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div> 
          </Col>
        </Row> */}
      {/* <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h2 className="text-uppercase text-primary font-weight-medium f-14 mb-4">CROSS-O</h2>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Daily Fantasy Sports Plateform Built on <span className="text-primary font-weight-medium">Polygon</span></h1>
              <p className="text-muted mb-4 pb-2">Decentralized Data Oracles, Rigid Smart Contracts, Low Rake Fees, and Epic Payouts</p>
              <a href="#" className="btn btn-warning">
                Learn more about our technology <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Group Members.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row> */}
    </section>
  );
};

export default Hero;
