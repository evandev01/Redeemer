import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './style.css'


function Header(props) {
    return (
        <header>
            <Container>
                        <Image id='header' alt='church photo' src={props.src} />
            </Container>
        </header>
    )
};

export default Header;