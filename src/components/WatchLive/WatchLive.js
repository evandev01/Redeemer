import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './style.css';

const WatchLive = () => {
  // useEffect(() => {
  //   document.body.style.setProperty({ backgroundColor: 'black' });
  // }, []);
  // const [isDark, setIsDark] = useState(false);

  return (
    <Fragment>
      <Container id='stream'>
        <Row className='justify-content-md-center'>
          <iframe
            id='player'
            // width='2000'
            // height='1125'
            src='https://www.youtube.com/embed/5HUAL36GI-M'
            title='YouTube video player'
            frameborder='1'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </Row>
      </Container>
    </Fragment>
  );
};

export default WatchLive;

// https://www.youtube.com/embed/7MKSynH-NUw
