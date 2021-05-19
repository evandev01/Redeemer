import React, { Fragment } from 'react';

import { Container, Row } from 'react-bootstrap';

import Header from '../Header';

const Giving = () => {
  return (
    <Fragment>
      <Container>
        <Row></Row>
        <Row className='justify-content-md-center'>
          <h6 id='online-giving'>Online Giving Coming Soon!</h6>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
