import React, { Fragment } from 'react';

import { Container, Row } from 'react-bootstrap';
import './style.css';

import Header from '../Header';

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
            street
            <br />
            city
            <br />
            <br />
            Phone:
            <br />
            (555) 555-5555
            <br />
            Email:
            <br />
            email@gmail.com
          </p>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Connect;
