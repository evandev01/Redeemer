import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './style.css';

const WatchLive = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className='stream'>
            <h6 id='coming-soon'>Live Stream coming soon!</h6>
            <iframe
              id='stream'
              height='515'
              width='760'
              src='https://www.youtube.com'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='allowfullscreen'
            ></iframe>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default WatchLive;

// https://www.youtube.com/embed/7MKSynH-NUw
