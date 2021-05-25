import React, { Fragment } from 'react';

import { Container, Row, Button, Image } from 'react-bootstrap';
import './style.css';
import tithes from '../../assets/graphics/tithes_img.jpg';

const Giving = () => {
  return (
    <Fragment>
      <Container id='tithe-container'>
        <Row className='justify-content-md-center'>
          <Image id='tithes' src={tithes} alt='tithes and offering' />
        </Row>
        <Row className='justify-content-center'>
          <Button
            id='online-giving'
            href='https://secure.myvanco.com/L-YR09/home'
          >
            Give
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
