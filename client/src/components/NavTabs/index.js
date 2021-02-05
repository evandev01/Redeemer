import React from 'react';
import { Nav, Container } from 'react-bootstrap';

function NavTabs() {
    return (
        <div>
            <Container>
                <Nav id='navBar' className='justify-content-center' activeKey='/home'>
                    <Nav.Item>
                        <Nav.Link href='/home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/news'>News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/events'>Events</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Container>

        </div>
    )
};

export default NavTabs;