import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './style.css';
// import logo from '../../assets/header-assets/logo_header.jpg';
import header from '../../assets/logo-assets/logo-3trees.png';

const Header = props => {
  return (
    <header>
      <Container id='border'>
        <Row className='justify-content-md-center'>
          <Image alt={'Redeemer Church Logo'} id='nav-logo' src={header} />
        </Row>
      </Container>
    </header>
  );
};

export default Header;
