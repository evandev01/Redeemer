import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.css'
import Proclaim from '../../assets/graphics/proclaim_7.4.jpg'
import Joel from '../../assets/joel/joel-img1.jpeg'
import BYG from '../../assets/graphics/byg-img.jpg'
import Watch from '../../assets/icons/video-icon.jpg'
import YouTube from '../../assets/icons/youtube-logo2.png'
import Bonfire from '../../assets/images/bonfire.jpeg'

const Home = () => {
  return (
    <Fragment>
      <Container id='home-body' className='mt-5'>
        <Row className='text-center'>
          <Col className='text-center mt-5'>
            <h2 className='mb-4'>Proclaiming the gospel of Jesus Christ</h2>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col md={6} className='text-center'>
            <Image id='joel' src={Joel} className='ml-3'></Image>
          </Col>
          <Col>
            <p id='hebrew-home' className='text-left mt-3'>
              "so that at the name of Jesus every knee will bow in heaven and on
              earth and every tongue will confess that Jesus Christ is Lord, to
              the glory of God the Father."
              <br />
              (Phillippians 2:10)
            </p>
            <h6 className=' text-left mt-5 ml-1'>Join us for service!</h6>
            <p id='hebrew-home' className='text-left mt-3 ml-1'>
              Sunday: 10:00am <br />
              Wednesday: 6:30pm
              <br />
              Location: <br />
              5417 IN-10 <br />
              DeMotte, IN 46310
            </p>
          </Col>
        </Row>
        <Row id='home-border' />

        <Row className='mt-5'>
          <Col md={6} sm={6} xs={6} className='text-right'>
            <Image
              id='bonfire-home'
              src={Bonfire}
              alt='Bonfire'
              // className='py-3'
            />
          </Col>
          <Col md={6} sm={6} xs={6}>
            <h4 className='text-left'>Redeemer Church Bonfire</h4>
            <h6 className='text-left mt-3'>August 2021</h6>
            <p className='text-left mt-3'>
              Click{' '}
              <strong>
                <Link to='/events'>HERE</Link>
              </strong>{' '}
              for more information
            </p>
          </Col>
        </Row>

        <Row id='home-border' />
        <Row className='mt-5'>
          <Col md={6} sm={6} xs={6} className='text-right'>
            <Image
              id='byg'
              src={BYG}
              alt='Behold Your God Bible Study'
              className='ml-5'
            />
          </Col>
          <Col md={6} sm={6} xs={6}>
            <h4 className='text-left'>Behold Your God Bible Study</h4>
            <p className='text-left mt-3'>
              Current Week: <strong>6</strong>
            </p>
            <br />
            <p className='text-left'>
              Click{' '}
              <Link to='/events' style={{ fontWeight: '600' }}>
                HERE
              </Link>{' '}
              for more information
            </p>
          </Col>
        </Row>

        <Row id='home-border' />

        <Row className='mt-5'>
          <Col md={6} sm={6} xs={6} className='text-right'>
            <Image id='watch' src={Watch} alt='Watch live sermons' />
          </Col>

          <Col md={6} sm={6} xs={6} className='text-left'>
            <h4 className='text-left mb-3'>Sermons Streaming Live Now!</h4>
            <p className='text-left'>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
        </Row>

        <Row id='home-border' />
      </Container>
    </Fragment>
  )
}

export default Home
