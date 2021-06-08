import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import vancoIcon from '../../assets/vanco/vanco-mobile.png';
import appStore from '../../assets/vanco/app_store.svg';
import googlePlay from '../../assets/vanco/google-play.png';
import tithes from '../../assets/graphics/tithes_img.jpg';
import './style.css';

const Giving = () => {
  return (
    <Fragment>
      <Container id='tithe-container'>
        <Row className='justify-content-center'>
          <Card id='tithes' bg='dark' text='light'>
            <Card.Img variant='top' src={tithes} />
            <Card.Body>
              <Card.Title className='text-center'>
                Tithes and Offering
              </Card.Title>
              <Card.Text className='text-center'>3 Ways To Give</Card.Text>

              <Card.Text className='text-center'>
                Click below to give online!
              </Card.Text>
              <Row className='justify-content-center'>
                <Button
                  className='text-center'
                  variant='primary'
                  id='online-giving'
                  href='https://secure.myvanco.com/L-YR09/home'
                >
                  Give
                </Button>
              </Row>
            </Card.Body>

            {/*=== VANCO MOBILE APP ===*/}
            <Card.Body>
              <Row id='give-border' className='justify-content-center'>
                <Card.Title className='text-center'>OR</Card.Title>
              </Row>
              <Card.Text className='text-center'>
                Download the Vanco Mobile App
              </Card.Text>
              <Row className='justify-content-center'>
                <Image
                  src={vancoIcon}
                  alt='Vanco Mobile Faith Engagement'
                  style={{
                    maxWidth: '160px',
                    height: 'auto',
                    // borderRadius: '22%',
                    // overflow: 'hidden',
                    // display: 'inline-block',
                    // verticalAlign: 'middle',
                    marginBottom: '1rem'
                  }}
                />
              </Row>
              <Container id='app-stores'>
                <Row className='justify-content-center'>
                  <a href='https://apps.apple.com/us/app/vanco-mobile-faith-engagement/id1504961674?itsct=apps_box_badge&amp;itscg=30200'>
                    <Image
                      src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1588291200&h=237bfd1056c25049e01e07f0a567a9bd'
                      alt='Download on the App Store'
                      style={{
                        width: '150px',
                        height: 'auto'
                      }}
                    />
                  </a>
                </Row>
                <Row className='justify-content-center'>
                  <a href='https://play.google.com/store/apps/details?id=com.vancopayments.vancomobile&hl=en_US&gl=US'>
                    <Image
                      src={googlePlay}
                      alt='Get it on Google Play'
                      style={{
                        width: '150px',
                        height: 'auto'
                      }}
                    />
                  </a>
                </Row>
              </Container>
            </Card.Body>

            <Card.Body>
              <Row id='give-border' className='justify-content-center'>
                <Card.Title className='text-center'>OR</Card.Title>
              </Row>
              <Card.Text className='text-center'>
                Text the dollar amount you would like to give to:
              </Card.Text>
              <Card.Title className='text-center'>
                <Card.Title className='text-center'>844-789-0498</Card.Title>
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
