import React from 'react';
import './style.css';
import { Nav, Container } from 'react-bootstrap';

function NavTabs() {

    return (
        <div>
            <Container>
                <Nav id='nav-bar' fill variant="tabs">
                    <Nav.Item id='nav-item'>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id='nav-item'>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id='nav-item'>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id='nav-item'>
                        <Nav.Link href='/news'>News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item id='nav-item' >
                        <Nav.Link href='/events'>Events</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Container>

        </div>
    )
};

export default NavTabs;