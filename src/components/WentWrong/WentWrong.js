import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import warning from '../../Assets/Images/warning.svg'

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">

                        <Row>
                            <Col>
                                <img src={warning} height="200px" width="200px" />
                            </Col>
                        </Row>
                   </Container>

            </Fragment>
        );
    }
}

export default WentWrong;