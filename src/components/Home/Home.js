import React, { Fragment, useState, useEffect } from 'react';

import header from '../Header/Header';
import Proclaim from '../../assets/graphics/proclaim@2x.jpg';
import BYG from '../../assets/graphics/BYG@2x.jpg';
import Watch from '../../assets/events/watch-live.jpg';
import test from '../../assets/photos/IMG_2483.jpeg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.css';

const Home = () => {
  return (
    <Fragment>
      <Container id='home-body'>
        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <Image
              id='proclaim'
              src={Proclaim}
              alt='Pastor Joel proclaiming the name of Jesus'
            />
          </Col>
          <Col md='auto' />
        </Row>

        <Row id='home-border' />
        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <Image id='byg' src={BYG} alt='Behold Your God Bible Study' />
          </Col>
          <Col md='auto' />
        </Row>

        <Row id='home-border' />

        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <Image id='watch' src={Watch} alt='Watch live sermons' />
          </Col>
          <Col md='auto' />
        </Row>

        <Row id='home-border' />
      </Container>
    </Fragment>
  );
};

export default Home;

//  <Image src={JoelAndNiki} alt='Pastor Joel Gilbert and Niki Gilbert' />
//           <h6 id='proclaim'>Proclaiming the gospel of Jesus Christ</h6>
