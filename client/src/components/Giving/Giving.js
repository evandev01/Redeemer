import React, { Fragment } from 'react';

import { Container, Row } from 'react-bootstrap';

import Header from '../Header';

const Giving = () => {
  return (
    <Fragment>
      <Container>
        <Row></Row>
        <Row>
          <form
            action='https://www.paypal.com/donate'
            method='post'
            target='_top'
          >
            <input type='hidden' name='business' value='8LQHMK6UJS5BY' />
            <input type='hidden' name='currency_code' value='USD' />
            <input
              type='image'
              src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif'
              border='0'
              name='submit'
              title='PayPal - The safer, easier way to pay online!'
              alt='Donate with PayPal button'
            />
            <img
              alt=''
              border='0'
              src='https://www.paypal.com/en_US/i/scr/pixel.gif'
              width='1'
              height='1'
            />
          </form>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Giving;
