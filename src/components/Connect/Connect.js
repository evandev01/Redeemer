import React, { Fragment } from 'react';

import { Container, Row } from 'react-bootstrap';
import './style.css';

import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Connect = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <Container id='content'>
        <Row className='justify-content-md-center'>
          <h6 id='feel-free'>
            Feel free to contact us by email or phone for prayer requests and
            more information
          </h6>
        </Row>
        <Row className='justify-content-md-center'>
          <p id='contact-info'>
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
        </Row>
      </Container>
    </Fragment>
  );
};

export default Connect;
