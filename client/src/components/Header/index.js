import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './style.css'
import logo from '../../assets/header-assets/logo_header.jpg'
import servImg from '../../assets/bkgd-assets/serviceTimes_graphic.jpg'

function Header(props) {
    return (
        <header >
            <Container id='border'>
            <Image id='header' alt='church photo' src={props.src} />
            <Image id='logo' alt='logo' src={servImg} />
            </Container>
        </header>
    )
};

export default Header;