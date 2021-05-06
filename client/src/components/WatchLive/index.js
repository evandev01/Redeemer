import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import './style.css';


const WatchLive = () => {
  return (
      <Container>
        <Row>
      <Col>
      <Jumbotron className='stream'>
                        <iframe id='stream' height='515' width='760' src="https://www.youtube.com/embed/7MKSynH-NUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                        </Jumbotron>
                    </Col>
                    </Row>
                    </Container>
  )
}

export default WatchLive;
