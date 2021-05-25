import React, { Fragment } from 'react';
import { Col, Image, Row, Container } from 'react-bootstrap';
import './style.css';
import BYG_events from '../../assets/graphics/BYG-events@2x.jpg';
import WatchLive from '../../assets/events/watch-live-events.jpg';

const Events = () => {
  return (
    <Fragment>
      <Container id='events-body'>
        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <Image
              id='byg-events'
              src={BYG_events}
              alt='Behold Your God Bible study'
            />
          </Col>
          <Col md='auto' />
        </Row>

        <Row id='home-border' />

        <Row className='justify-content-md-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10}>
            <Image
              id='watch-live-events'
              src={WatchLive}
              alt='Watch live sermons'
            />
          </Col>
          <Col md='auto' />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Events;
