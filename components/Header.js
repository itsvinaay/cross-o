import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 45) {
      setSticky(true);
    } else if (window.scrollY < 45) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md lg">
        <Container className='logo'>
            <div className='logo font-weight-bold'>
           <Link href="/">CROSS-O</Link>
           </div>
          <NavbarToggler className='toggle' onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem className="cool-link font-weight-bold">
                <Link href="/">Contest Pools</Link>
              </NavItem>
              <NavItem className="cool-link font-weight-bold">
              <Link href="/feature">The System</Link>
              </NavItem>
              <NavItem className="cool-link font-weight-bold">
              <Link href="/services">Data Oracals</Link>
              </NavItem>
              <NavItem className="cool-link font-weight-bold">
              <Link href="/about">Gamified Stacking</Link>
              </NavItem>
              <NavItem className="cool-link font-weight-bold">
              <Link href="/about">$CROSS-O Token</Link>
              </NavItem>
              <NavItem className="cool-link font-weight-bold">
              <Link href="/about">Fan Clubs</Link>
              </NavItem>
              <NavItem className="hover font-weight-bold">
              <Link href="/about"><button type="button" class="btn btn-primary font-weight-bold">LOCKER ROOM</button></Link>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;