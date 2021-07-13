import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col, Image, Row, Container } from 'react-bootstrap'
import './style.css'
import BYG_events from '../../assets/graphics/BYG-events@2x.jpg'
import WatchLive from '../../assets/events/watch-live-events.jpg'
import BYG from '../../assets/graphics/byg-img.jpg'
import Watch from '../../assets/icons/video-icon.jpg'
import YouTube from '../../assets/icons/youtube-logo2.png'

const Events = () => {
  return (
    <Fragment>
      <Container id='events-body'>
        <Row className='text-center mt-3'>
          <Col lg={4}>
            <Image
              className='py-3'
              id='byg-events'
              src={BYG}
              alt='Behold Your God Bible Study'
              // className='py-3'
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h6 id='byg-h6-events' className='text-center'>
              Behold Your God Bible Study
            </h6>
            <p id='current-wk' className='text-center'>
              Current Week: 6
            </p>
            <p id='hebrew' className='text-left mr-5 ml-2'>
              Behold Your God is a 12-week study for churches, small groups,
              families or individuals containing 12 sessions that are reinforced
              by a 12-week daily workbook. <br />
              Each week's lesson is preceded by a brief historical profile of a
              notable man or woman of God such as George Muller, A. W. Tozer,
              Samuel Rutherford, Charles Spurgeon, Martyn Lloyd-Jones, Amy
              Carmichael, Robert Murray M'Cheyne, George Whitefield, Daniel
              Rowland and Jonathan Edwards. <br />
              The heart of each DVD is a 30-minute lesson on one aspect of the
              Christian life and how it is affected by a biblical rethinking of
              God's character.
              <br />
              The teaching sessions are led by Dr. John Snyder, pastor of Christ
              Church in New Albany, Mississippi.
            </p>
          </Col>
        </Row>

        <Row id='home-border' />

        <Row className='text-center'>
          <Col sm={12} md={6} sm={6} xs={5}>
            <Image
              id='watch'
              src={Watch}
              alt='Watch live sermons'
              className='ml-3'
            />
          </Col>

          <Col sm={12} md={6} sm={6} xs={5} className='text-center'>
            <h4 className='text-left mr-5 mb-5'>Sermons Streaming Live Now!</h4>
            <p className='text-left mt-2'>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Events
