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
          <Col md='auto'>
            <h6 id='about-h6' className='text-center'>
              Mission statement:
            </h6>
          </Col>
        </Row>
        <Row>
          <p id='para' className='text-left'>
            At Redeemer Church, we seek to bring together the God's mission and
            the mission of the Church by making disciples who delight in,
            display, and declare the glorious gospel of Jesus Christ!
          </p>
        </Row>

        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <h6 id='about-h6' className='text-center'>
              Our Vision:
            </h6>
            <h6 id='about-h6' className='text-center'>
              Treasuring Christ and Proclaiming His Worth
            </h6>
          </Col>
        </Row>
        <Row>
          <p id='para' className='text-left'>
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
          <Col md='auto'>
            <h6 id='about-h6' className='text-center'>
              About Pastor Joel Gilbert
            </h6>
          </Col>
        </Row>
        <Row>
          <p id='para' className='text-left'>
            By His grace, God called me to preach His Word about 15 years ago.
            He put His Word in my mouth and has not let me be silent since He
            called me. At the end 2010 God called me to preach at Redeemer
            Church. My aim in preaching is to exalt Christ, edify and strengthen
            God’s people, and humble the sinner! My aim is preaching that uses
            the truth of Scripture to shine the glory of God into the depths of
            the soul to call people to live devotedly and totally for God.
            Perhaps to sum up true biblical preaching is: it breaks us and
            remakes us. With all my heart I desire such preaching that brings us
            face to face with the most glorious and delightful Being in the
            universe, and also face to face with our own profound wickedness. By
            such preaching, the holy God binds Himself to sinful men — heart to
            heart with a word of blood-bought grace.
          </p>
        </Row>
        <Row className='justify-content-md-center'>
          <Col md='auto'>
            <p id='verse' className='text-left'>
              “But speaking the truth in love, let us grow in every way into him
              who is the head—Christ.” ||Ephesians 4:15||
              <br />
              “Now the goal of our instruction is love that comes from a pure
              heart, a good conscience, and a sincere faith.” ||1 Timothy 1:5 ||
            </p>
          </Col>
        </Row>
        <Row>
          <p id='para' className='text-left'>
            In preaching it’s not just that preachers need both truth and love.
            Gospel truth has not reached its goal until it produces love. Love
            has no living roots without gospel truth. Therefore, the goal and
            aim of my preaching is that the truth of Christ would and must be
            brought home to the heart by the Holy Spirit in order to produce
            love. The aim in my preaching is NOT preaching that fills the head
            but not the heart. I absolutely seek to stay away from trying to
            inform and educate people apart from them being MOVED BY God’s glory
            TO DO God’s will! The type of preaching that aims at puffing people
            up with knowledge is at best, light without heat.
          </p>

          <p id='para' className='text-left'>
            As a preacher I sincerely want my heart burn with love each week. If
            the Spirit intends to work in the hearers of the Word, I’ve learned
            that He generally works first in the preacher of the Word. In wisdom
            I wholeheartedly covet the prayers of God’s people for the filling
            of the Holy Spirit that I may preach in the power of the Spirit and
            for the glory of God alone!
            <br />
            (Acts 4:8, 29–33; Eph. 6:18–20)
          </p>
        </Row>
        <div id='bottom' />
      </Container>
    </Fragment>
  );
};

export default About;
