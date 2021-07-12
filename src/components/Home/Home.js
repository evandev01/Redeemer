import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './style.css'
import Proclaim from '../../assets/graphics/proclaim_7.4.jpg'
import Joel from '../../assets/joel/joel-img1.jpeg'
import BYG from '../../assets/graphics/byg-img.jpg'
import Watch from '../../assets/icons/video-icon.jpg'
import YouTube from '../../assets/icons/youtube-logo2.png'

const Home = () => {
  return (
    <Fragment>
      <Container id='home-body' className='mt-5'>
        <Row>
          <Col className='text-center mt-5'>
            <h1 className='mb-4'>Proclaiming the gospel of Jesus Christ</h1>
          </Col>
        </Row>
        <Row>
          <Image id='joel' src={Joel} className='ml-3'></Image>

          <Col className='ml-3'>
            <p id='hebrew' className='mt-3'>
              "so that at the name of Jesus every knee will bow in heaven and on
              earth and every tongue will confess that Jesus Christ is Lord, to
              the glory of God the Father." (Phillippians 2:10)"
            </p>
            <br />
            <br />
            <h6 id='join-us' className='mt-5'>
              Join us for service!
            </h6>
            <p id='hebrew' className='mt-3'>
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
        <Row className='justify-content-md-left mt-5 ml-5'>
          <Col>
            <Image
              id='byg'
              src={BYG}
              alt='Behold Your God Bible Study'
              // className='py-3'
            />
          </Col>
          <Col>
            <h6 id='byg-h6' className='text-center mt-3 mr-5'>
              Behold Your God Bible Study
            </h6>
            <p id='current-wk' className='text-center mt-3 mr-5'>
              Current Week: 6
            </p>
            <br />
            <br />
            <p id='current-wk' className='text-center mt-3 mr-5'>
              Click on the{' '}
              <Link to='/events' style={{ fontWeight: '600' }}>
                Events
              </Link>{' '}
              link above for more information
            </p>
          </Col>
        </Row>

        <Row id='home-border' />

        <Row className='justify-content-md-center'>
          <Col className='text-center'>
            <h4 id='stream-h6' className='text-center'>
              Sermons Streaming Live Now!
            </h4>
            <Image
              id='watch'
              src={Watch}
              alt='Watch live sermons'
              className='mt-3'
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p id='current-wk' className='text-center mt-3'>
              Click here{'  '}
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
