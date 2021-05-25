import React, { Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.css';
import Joel from '../../assets/photos/IMG_2488.jpeg';
import Georgette from '../../assets/photos/IMG_2493.jpeg';
import Lisa from '../../assets/photos/IMG_2499.jpeg';
import Steve from '../../assets/photos/IMG_2479.jpeg';
import David from '../../assets/photos/IMG_2478.jpeg';
import Bob from '../../assets/photos/IMG_2475.jpeg';

const Staff = () => {
  return (
    <Fragment>
      <Container id='staff'>
        <Row className='justify-content-md-center'>
          <Col xs={12} lg={12} className='text-center' md='auto'>
            <h4 id='title'>Our Servant Leaders</h4>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={12} lg={12} className='text-center' md='auto'>
            <h5 id='staff-h5'>Elders</h5>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image src={Joel} alt='Pastor Joel and Niki Gilbert' id='photo' />
            <h6 md='auto' id='staff-h6'>
              Pastor Joel Gilbert
            </h6>
          </Col>

          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image src={Bob} alt='Bob - Elder' id='photo' />
            <h6 id='staff-h6'>Pastor Bob Wheeler</h6>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={6} lg={4} className='text-center' md='auto'>
            <h5 id='staff-h5'>Deacons</h5>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image src={Steve} alt='Steve - Elder' id='photo' />
            <h6 id='staff-h6'>Steve Renfrow</h6>
          </Col>

          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image src='' alt='Shane Felber' id='photo' />
            <h6 md='auto' id='staff-h6'>
              Shane Felber
            </h6>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={12} lg={12} className='text-center' md='auto'>
            <Image
              src={David}
              alt={'David Harris - Worship Leader'}
              id='photo'
            />
            <h6 id='staff-h6'>David Harris</h6>
            <p id='staff-position'>(Worship Leader)</p>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image
              src={Georgette}
              alt={'Georgette Aguilar - Church Treasurer'}
              id='photo'
            />
            <h6 id='staff-h6'>Georgette Aguilar</h6>
            <p id='staff-position'>(Church Treasurer)</p>
          </Col>

          <Col xs={6} lg={4} className='text-center' md='auto'>
            <Image src={Lisa} alt={'Lisa - Volunteer'} id='photo' />
            <h6 id='staff-h6'>Lisa Brown</h6>
            <p id='staff-position'>(Church Clerk)</p>
          </Col>
        </Row>
        <div id='bottom' />
      </Container>
    </Fragment>
  );
};

export default Staff;
