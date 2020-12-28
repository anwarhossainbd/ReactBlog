import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Textloading from '../../Assets/Images/textloading.svg'





class TextLoading extends Component {
    render() {
        return (
             <Fragment>
                   <Container className="text-center">

                        <Row>
                            <Col>
                                <img src={Textloading} height="200px" width="200px" />
                            </Col>
                        </Row>
                   </Container>

            </Fragment>
        );
    }
}

export default TextLoading;