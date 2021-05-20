import React, { Fragment } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './style.css';

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream'>
        <Row>
          <Col>
            <Jumbotron id='stream'>
              {/* <h6 id='coming-soon'>Live Stream</h6> */}
              <iframe
                id='player'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/5HUAL36GI-M'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default WatchLive;

// https://www.youtube.com/embed/7MKSynH-NUw
