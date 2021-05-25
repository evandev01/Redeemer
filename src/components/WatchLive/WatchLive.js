import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './style.css';

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream'>
        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <iframe
              id='player'
              src='https://www.youtube.com/embed/3tjSwyRHBN0'
              title='YouTube video player'
              frameborder='1'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </Col>
          <Col md='auto' />
        </Row>
      </Container>
    </Fragment>
  );
};

export default WatchLive;

// https://www.youtube.com/embed/7MKSynH-NUw
