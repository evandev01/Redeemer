import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

const WatchLive = () => {
  return (
    <Fragment>
      <Container id='stream-container'>
        {/* LIVE STREAM ========== */}
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

        {/* THIS WEEKS SERVICE ========== */}
        <Row id='stream-player' className='justify-content-center pb-5'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              id='player'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/J7rk_2qo8Es'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>
        </Row>

        {/* PROMO VIDEO ========== */}
        {/* <Row id='video-player' className='justify-content-center'>
          <Col md='auto' />
          <Col xs={12} sm={12} md={10} lg={10} className='text-center'>
            <iframe
              id='player'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/bNIifn8zUqc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen='true'
            ></iframe>
          </Col>

          <Col md='auto' />
        </Row> */}
      </Container>
    </Fragment>
  )
}

export default WatchLive
