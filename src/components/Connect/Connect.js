import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Image, Col } from 'react-bootstrap';
import './style.css';

import logo from '../../assets/logo-assets/red_logo01.png';

const Connect = () => {
  return (
    <Fragment>
      <Container id='content'>
        <Jumbotron id='jumbo'>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center'>
              <Image id='red-logo' src={logo} alt='Redeemer Church logo' />
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center'>
              <h6 id='feel-free'>
                Feel free to contact us by email or phone for prayer requests
                and more information.
              </h6>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={12} className='text-center'>
              <p className='text-center' id='contact-info'>
                <br />
                Address:
                <br />
                5417 IN-10
                <br />
                De Motte, IN 46310
                <br />
                <br />
                Phone: (219) 345-5725
                <br />
                Email: <Link>redeemerchurch.life@gmail.com</Link>
              </p>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default Connect;
