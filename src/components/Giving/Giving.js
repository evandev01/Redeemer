import React, { Fragment } from 'react';

import { Container, Row } from 'react-bootstrap';
import './style.css';

import Header from '../Header';

const Giving = () => {
  return (
    <Fragment>
      <Container>
        <Row id='online-giving' className='justify-content-md-center'>
          <h6>Online Giving Coming Soon!</h6>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
