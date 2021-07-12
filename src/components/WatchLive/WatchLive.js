import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream-container'>
        {/* THIS WEEKS SERVICE ========== */}
        <Row id='stream-player' className='justify-content-center pb-5'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              id='player'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/-A9Sus27DTc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>
        </Row>
        <Row id='live-border' className='p-5' />
        {/* LAST WEEKS SERVICE ========== */}
        <Row id='stream-player' className='justify-content-center mt-5'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/79IX47QBdd8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>
        </Row>
        <Row id='live-border' className='p-5' />
      </Container>
    </Fragment>
  )
}

export default WatchLive
