import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './style.css'
import logo from '../../assets/header-assets/logo_header.jpg'
import HeaderImage from '../../assets/header-assets/image01_edit.jpg'

function Header(props) {
    return (
        <header>
            <Container id='border'>
                <Image id='header' alt='church photo' src={HeaderImage} />
                
            </Container>
        </header>
    )
};

export default Header;