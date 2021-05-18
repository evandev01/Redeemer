import React, { Fragment } from 'react';

import { Col, Image, Row, Container, Jumbotron } from 'react-bootstrap';
import './style.css';

import Header from '../Header';
import BYG from '../../assets/events/BYG.jpg';

const Events = () => {
  return (
    <Container>
      <Jumbotron>
        <Row id='byg-content'>
          <Col sm={12} md={4} lg={4} className='text-center'>
            <Image src={BYG} alt='Behold Your God workbook image' id='BYG' />
          </Col>
          <Col sm={12} md={8} lg={8}>
            <h6 id='study-title' className='text-center'>
              Behold Your God Bible Study
            </h6>
            <h6>
              Starting June 2, 2021 we will begin the Behold Your God study on
              Wednesday evenings in place of the normal service.
            </h6>
            <p id='byg-desc' className='text-left'>
              Behold Your God is a 12-week study for churches, small groups,
              families or individuals containing 12 sessions that are reinforced
              by a 12-week daily workbook. Each week's lesson is preceded by a
              brief historical profile of a notable man or woman of God such as
              George Muller, A. W. Tozer, Samuel Rutherford, Charles Spurgeon,
              Martyn Lloyd-Jones, Amy Carmichael, Robert Murray M'Cheyne, George
              Whitefield, Daniel Rowland and Jonathan Edwards. The heart of each
              DVD is a 30-minute lesson on one aspect of the Christian life and
              how it is affected by a biblical rethinking of God's character.
              The teaching sessions are led by Dr. John Snyder, pastor of Christ
              Church in New Albany, Mississippi.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Events;
