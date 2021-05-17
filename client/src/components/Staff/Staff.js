import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.css';

import JoelAndNiki from '../../assets/photos/IMG_2487.jpeg';
import Georgette from '../../assets/photos/IMG_2493.jpeg';
import Lisa from '../../assets/photos/IMG_2499.jpeg';
import Steve from '../../assets/photos/IMG_2479.jpeg';
import David from '../../assets/photos/IMG_2478.jpeg';
import Bob from '../../assets/photos/IMG_2475.jpeg';
import { Fragment } from 'react';

const Staff = () => {
  return (
    <Fragment>
      <Container id='staff'>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <h4 id='title' className='text-center'>
              Our Servant Leaders
            </h4>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <h5 id='staff-h5' className='text-center'>
              Elders
            </h5>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Image
              src={JoelAndNiki}
              alt='Pastor Joel and Niki Gilbert'
              id='photo'
            />
            <h6 id='pastor' className='text-left'>
              Pastor Joel Gilbert and Niki Gilbert
            </h6>
          </Col>
          <Col md='auto'>
            <Image src={Bob} alt='Bob - Elder' id='photo' />
            <h6 id='staff-h6' className='text-center'>
              Pastor Bob Wheeler
            </h6>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <h5 id='staff-h5' className='text-center'>
              Deacons
            </h5>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Image src={Steve} alt='Steve - Elder' id='photo' />
            <h6 id='staff-h6' className='text-center'>
              Steve Renfrow
            </h6>
          </Col>
          <Col md='auto'>
            <Image
              // src={Shane}
              alt='Shane Felber'
              id='photo'
            />
            <h6 id='staff-h6' className='text-center'>
              Shane Felber
            </h6>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Image
              src={David}
              alt={'David Harris - Worship Leader'}
              id='photo'
            />
            <h6 id='staff-h6' className='text-center'>
              David Harris
            </h6>
            <p className='text-center'>(Worship Leader)</p>
          </Col>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <Image
              src={Georgette}
              alt={'Georgette Aguilar - Church Treasurer'}
              id='photo'
            />
            <h6 id='staff-h6' className='text-center'>
              Georgette Aguilar
            </h6>
            <p className='text-center'>(Church Treasurer)</p>
          </Col>
          <Col md='auto'>
            <Image src={Lisa} alt={'Lisa - Volunteer'} id='photo' />
            <h6 id='staff-h6' className='text-center'>
              Lisa Brown
            </h6>
            <p className='text-center'>(Church Clerk)</p>
          </Col>
        </Row>
        <div id='bottom' />
      </Container>
    </Fragment>
  );
};

export default Staff;
