import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import Header from '../Header';

const About = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Header id='header' />
        </Row>
        <Row className='justify-content-md-center'>
          <h6 id='vision'>Mission statement:</h6>
        </Row>
        <Row className='justify-content-md-center'>
          <p>
            At Redeemer Church, we seek to bring together the God's mission and
            the mission of the Church by making disciples who delight in,
            display, and declare the glorious gospel of Jesus Christ!
          </p>
        </Row>

        <Row className='justify-content-md-center'>
          <h6 id='vision'>
            Our Vision: Treasuring Christ and Proclaiming His Worth
          </h6>
        </Row>
        <Row>
          <p>
            Because God the Father is so delighted in His Son, He designed a
            masterful plan that stretches across all eternity to honor and exalt
            Jesus as the centerpiece of all heavenly and earthly existence. By
            the working of His Spirit, we too have been enlightened and enabled
            to enjoy and delight in the work and person of Jesus Christ. Our
            goal at Redeemer Church is to fully embrace and participate in the
            Father's plan to glorify and lift up Jesus Christ as the One worthy
            of pre-eminence in all things and among all peoples. We want our
            people to learn to treasure Christ more than anything else, and in
            so doing, to find themselves compelled to proclaim His infinite
            worth.
          </p>
        </Row>
        <Row className='justify-content-md-center'>
          <h6 id='about-joel'>About Pastor Joel Gilbert</h6>
        </Row>
        <Row className='justify-content-md-center'>
          <p></p>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
