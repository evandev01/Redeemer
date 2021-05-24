import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { Nav, Container, Image, Row, Col, Navbar } from 'react-bootstrap';
// import logo from '../../assets/logo-assets/red_logo01.png';
import logo from '../../assets/logo-assets/logo-3trees.png';
import './style.css';

const NavTabs = props => {
  // const setStyle = () => {
  //   if (expanded === true) {
  //     backgroundColor = 'black';
  //   }
  // };

  return (
    <Fragment>
      <Container id='nav-container' className='justify-content-center'>
        <Row className='justify-content-md-center'>
          <Col xs={1} md={1} lg={4} />
          <Col xs={10} md={10} lg={4}>
            <Navbar expand='md' className='justify-content-md-center'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav activeKey='/'>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/'
                    >
                      HOME
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/about'
                    >
                      ABOUT
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/events'
                    >
                      EVENTS
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/watchlive'
                    >
                      WATCH LIVE
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/connect'
                    >
                      CONNECT
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/giving'
                    >
                      GIVING
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      style={{
                        color: props.linkColor,
                        backgroundColor: props.navColor
                      }}
                      href='/staff'
                    >
                      STAFF
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={1} md={1} lg={4} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default NavTabs;
