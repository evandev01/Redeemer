import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';

function HomeComp(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    Service Times<br></br>Address
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <iframe width="760" height="515" src="https://www.youtube.com/embed/7MKSynH-NUw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen">
                    </iframe></Col>
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