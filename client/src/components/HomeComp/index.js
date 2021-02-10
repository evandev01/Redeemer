import React from 'react';
import './style.css';
import { Col, Row, Container, Image } from 'react-bootstrap';
import servImg from '../../assets/bkgd-assets/serviceTimes_graphic.jpg'
// import bkgdImg from '../../assets/bkgd-assets/home-bkgd'

function HomeComp() {
    return (
        <div id='home-body'>
            <Container>
                <Row>
                    <Col />
                    <Col>
                        <div>
                            <h4 id='broadcast'>Live Sermon Broadcast:
                            </h4>
                        </div>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col>
                        <iframe id='stream' height='515' width='760' src="https://www.youtube.com/embed/7MKSynH-NUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                        </iframe>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        Important Updates
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Upcoming Event / Misc
                    </Col>
                </Row>
            </Container>

        </div>
    )
};

export default HomeComp;