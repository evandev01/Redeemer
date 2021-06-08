import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream-container'>
        <Row id='stream-player' className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/RH6KogtpP_E'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>

          <Col md='auto' />
        </Row>

        <Row id='video-player' className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              id='player'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/bNIifn8zUqc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>

          <Col md='auto' />
        </Row>
      </Container>
    </Fragment>
  );
};

export default WatchLive;
