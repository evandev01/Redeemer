import React, { useEffect } from 'react';
import { Nav, Container, Image, Row, Col, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo-assets/red_logo01.png';
import './style.css';

const NavTabs = () => {
  return (
    <div>
      {/* <Container id='nav-container'> */}
      <Row id='navbar'>
        <Col>
          <Image alt={'Redeemer Church Logo'} id='nav-logo' src={logo} />
        </Col>
        <div id='navBar'>
          <Col>
            <Navbar expand='md'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav activeKey='/'>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/'>
                      HOME
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/about'>
                      ABOUT
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/events'>
                      EVENTS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/watchlive'>
                      WATCH LIVE
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item  id='nav-link'>
                      <Nav.Link id='nav-link' href='/serve'>SERVE</Nav.Link>
                    </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/connect'>
                      CONNECT
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/giving'>
                      GIVING
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link id='nav-link' href='/staff'>
                      STAFF
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </div>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default NavTabs;
