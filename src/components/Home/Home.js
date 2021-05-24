import React, { Fragment } from 'react';

import header from '../Header/Header';
import Proclaim from '../../assets/graphics/proclaim@2x.jpg';
import BYG from '../../assets/graphics/BYG@2x.jpg';
import Watch from '../../assets/graphics/watch-live@2x.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.css';

const Home = () => {
  return (
    <Fragment>
      <Container id='home-body'>
        <Row className='justify-content-md-center'>
          <Image
            id='proclaim'
            src={Proclaim}
            alt='Pastor Joel proclaiming the name of Jesus'
          />
        </Row>
        <Row id='home-border' />
        <Row className='justify-content-md-center'>
          <Image id='byg' src={BYG} alt='Behold Your God Bible Study' />
        </Row>

        <Row id='home-border' />
        <Row className='justify-content-md-center'>
          <Image id='watch' src={Watch} alt='Watch live sermons' />
        </Row>
        <Row id='home-border' />
      </Container>
    </Fragment>
  );
};

export default Home;

//  <Image src={JoelAndNiki} alt='Pastor Joel Gilbert and Niki Gilbert' />
//           <h6 id='proclaim'>Proclaiming the gospel of Jesus Christ</h6>
