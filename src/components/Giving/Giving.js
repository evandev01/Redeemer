import React, { Fragment } from 'react';
import { Container, Row, Button, Card } from 'react-bootstrap';
import './style.css';
import tithes from '../../assets/graphics/tithes_img.jpg';

const Giving = () => {
  return (
    <Fragment>
      <Container id='tithe-container'>
        <Row className='justify-content-center'>
          <Card id='tithes' bg='dark' text='light'>
            <Card.Img variant='top' src={tithes} />
            <Card.Body>
              <Card.Title>Tithes and Offering</Card.Title>
              <Card.Text>Click below to give!</Card.Text>
              <Button
                className='text-center'
                variant='primary'
                id='online-giving'
                href='https://secure.myvanco.com/L-YR09/home'
              >
                Give
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
