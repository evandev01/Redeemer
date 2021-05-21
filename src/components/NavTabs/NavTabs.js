import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Nav, Container, Image, Row, Col, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo-assets/red_logo01.png';
import './style.css';

const NavTabs = props => {
  return (
    <Fragment>
      <Container id='nav-container'>
        <Row>
          <Col>
            <Image alt={'Redeemer Church Logo'} id='nav-logo' src={logo} />
          </Col>

          <Col>
            <Navbar expand='md'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav activeKey='/'>
                  <Nav.Item>
                    <Nav.Link style={{ color: props.linkColor }} href='/'>
                      HOME
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: props.linkColor }} href='/about'>
                      ABOUT
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: props.linkColor }} href='/events'>
                      EVENTS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      style={{ color: props.linkColor }}
                      href='/watchlive'
                    >
                      WATCH LIVE
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      style={{ color: props.linkColor }}
                      href='/connect'
                    >
                      CONNECT
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: props.linkColor }} href='/giving'>
                      GIVING
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: props.linkColor }} href='/staff'>
                      STAFF
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default NavTabs;
