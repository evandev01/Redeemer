import React from 'react';
import { Nav, Container, Image, Row, Col, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo-assets/red_logo01.png';
import './style.css';

const NavTabs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image alt={'Redeemer Church Logo'} id='nav-logo' src={logo} />
          </Col>
          {/* <Container> */}
          <div id='navBar'>
            <Col>
              <Navbar expand='md' className='justify-content-bottom'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav id='navBar' activeKey='/'>
                    <Nav.Item>
                      <Nav.Link href='/'>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/about'>ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/events'>EVENTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/watchlive'>WATCH LIVE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/serve'>SERVE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/connect'>CONNECT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/giving'>GIVING</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href='/staff'>STAFF</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </div>
          {/* </Container>   */}
        </Row>
      </Container>
    </div>
  );
};

export default NavTabs;
