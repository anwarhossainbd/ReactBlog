import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from '../../Assets/Images/loading .svg'

class Loader extends Component {
    render() {
        return (
            <Fragment>
                   <Container className="text-center">

                        <Row>
                            <Col>
                                <img src={loading} height="200px" width="200px" />
                            </Col>
                        </Row>
                   </Container>

            </Fragment>
        );
    }
}

export default Loader;