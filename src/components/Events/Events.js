import React, { Fragment } from 'react';

import { Col, Image, Row, Container, Jumbotron } from 'react-bootstrap';
import './style.css';

import Header from '../Header/Header';
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

// <Row id='byg-content'>
//   <Col sm={12} md={4} lg={4} className='text-center'>
//     <Image src={BYG} alt='Behold Your God workbook image' id='BYG' />
//   </Col>
//   <Col sm={12} md={8} lg={8}>
//     <h6 id='study-title' className='text-center'>
//       Behold Your God Bible Study
//     </h6>
//     <h6>
//       Starting June 2, 2021 we will begin the Behold Your God study on
//       Wednesday evenings in place of the normal service.
//     </h6>
//     <p id='byg-desc' className='text-left'>
//       Behold Your God is a 12-week study for churches, small groups,
//       families or individuals containing 12 sessions that are reinforced
//       by a 12-week daily workbook. Each week's lesson is preceded by a
//       brief historical profile of a notable man or woman of God such as
//       George Muller, A. W. Tozer, Samuel Rutherford, Charles Spurgeon,
//       Martyn Lloyd-Jones, Amy Carmichael, Robert Murray M'Cheyne, George
//       Whitefield, Daniel Rowland and Jonathan Edwards. The heart of each
//       DVD is a 30-minute lesson on one aspect of the Christian life and
//       how it is affected by a biblical rethinking of God's character.
//       The teaching sessions are led by Dr. John Snyder, pastor of Christ
//       Church in New Albany, Mississippi.
//     </p>
//   </Col>
// </Row>;
