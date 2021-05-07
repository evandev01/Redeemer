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
    <Container id='photos'>
      <Row className="justify-content-md-center">
        <Col md='auto' id='pastor'>
         <Image
         src={JoelAndNiki}
         alt='Pastor Joel and Niki Gilbert'
         id='pastor-wife' 
         />
         <h4>Pastor Joel and Niki Gilbert</h4>
        </Col>
      </Row>
      
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <h4>Staff</h4>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md='auto'>
         <Image
         src={David}
         alt={'David Harris - Worship Leader'}
         id='photo'
         /> 
         <h5>David Harris</h5>
         <p>Worship Leader</p>
        </Col>
        <Col md='auto'>
         <Image
         src={Georgette}
         alt={'Georgette Aguilar - Church Treasurer'}
         id='photo'
         /> 
         <h5>Georgette Aguilar</h5>
         <p>Church Treasurer</p>
         </Col>
        <Col md='auto'>
         <Image
         src={Lisa}
         alt={'Lisa - Volunteer'}
         id='photo'
         /> 
        <h5>Lisa</h5>
        <p>Volunteer Coordinator</p>
        </Col>
      </Row>
      
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <h4>Elders</h4>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
      <Col md='auto'>
         <Image
         src={Bob}
         alt={'Bob - Elder'}
         id='photo'
         /> 
         <h5>Bob</h5>
        </Col>
      <Col md='auto'>
         <Image
         src={Steve}
         alt={'Steve - Elder'}
         id='photo'
         /> 
         <h5>Steve</h5>
        </Col>
      </Row>
    </Container>
    </Fragment>
  )
};

export default Staff;
