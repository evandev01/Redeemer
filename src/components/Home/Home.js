import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.css'
import Proclaim from '../../assets/graphics/proclaim_7.4.jpg'
import Joel from '../../assets/joel/joel-img1.jpeg'
import BYG from '../../assets/graphics/byg-img.jpg'
import Watch from '../../assets/icons/video-icon.jpg'
import YouTube from '../../assets/icons/youtube-logo2.png'
import Bonfire from '../../assets/images/bonfire2.jpeg'

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
        <Row id='home-border' className='pt-4' />

        <Row className='mt-5' className='text-center'>
          <Col md={1} />
          <Col md={5}>
            <Image className='mb-3' id='bonfire' src={Bonfire} alt='Bonfire' />
          </Col>
          <Col md={5} className='text-center'>
            <h4>Redeemer Church Bonfire</h4>
            <h6>August 2021</h6>
            <p>
              Click{' '}
              <strong>
                <Link to='/events'>HERE</Link>
              </strong>{' '}
              for more information
            </p>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='home-border' className='pt-4' />
        <Row className='text-center mt-5'>
          <Col md={1} />
          <Col md={5}>
            <Image
              className='mb-3'
              id='byg'
              src={BYG}
              alt='Behold Your God Bible Study'
            />
          </Col>
          <Col md={5}>
            <h4>Behold Your God Bible Study</h4>
            <p>
              Current Week: <strong>6</strong>
            </p>
            <br />
            <p>
              Click{' '}
              <Link to='/events' style={{ fontWeight: '600' }}>
                HERE
              </Link>{' '}
              for more information
            </p>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='home-border' className='pt-4' />

        <Row className='text-center mt-5'>
          <Col md={1} />
          <Col md={5}>
            <Image
              className='mb-3'
              id='watch'
              src={Watch}
              alt='Watch live sermons'
            />
          </Col>

          <Col md={5}>
            <h4 className='mb-3'>Sermons Streaming Live Now!</h4>
            <p>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
          <Col md={1} />
        </Row>

        <Row id='home-border' className='pt-4' />
      </Container>
    </Fragment>
  )
}

export default Home
