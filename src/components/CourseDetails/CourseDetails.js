import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";
class CourseDetails extends Component {

    constructor() {
        super();
        this.state = {
            short_title: "",
            short_description: "",
            small_img: "",
            long_title: "",
            long_des: "",
            total_lecture: "",
            total_student: "",
            skill_all: "",
            video_url: "",
            course_link: "",
            loading: true,

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseDetails + this.props.id).then(result => {
            this.setState({
                short_description: result[0]['short_description'],
                total_lecture: result[0]['total_lecture'],
                total_student: result[0]['total_student'],
                long_title: result[0]['long_title'],
                short_title: result[0]['short_title'],
                long_des: result[0]['long_des'],
                video_url: result[0]['video_url'],
                course_link: result[0]['course_link'],
                loading: false,
            })

        }).catch(error => {

        })
    }


    render() {

        if (this.state.loading == true) {
            return <Loader></Loader>
        } else {

            return (
                <Fragment>
                    <Container fluid={true} className="topFixedPage p-0">
                        <div className="topPageOverlay">
                            <Container className="topPageContentCourse">
                                <Row>
                                    <Col sm={12} md={6} lg={6}>
                                        <h3 className="CourseFullTitle">{this.state.short_description}</h3>
                                        <h5 className="CourseSubTitle">Total Lecture={this.state.total_lecture}</h5>
                                        <h5 className="CourseSubTitle mt-0">Total
                                            Student={this.state.total_student}</h5>
                                    </Col>

                                    <Col sm={12} md={6} lg={6}>
                                        <p className="CourseDes">{this.state.long_title}  </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className="mt-5">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h1 className="serviceName">Skill You Get For {this.state.short_title} </h1>

                                {ReactHtmlParser(this.state.long_des)}
                                <Button target="_blank" href={"//" + this.state.course_link} variant="primary">More
                                    Info</Button>
                            </Col>

                            <Col sm={12} md={6} lg={6}>
                                <Player>
                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                    <BigPlayButton position="center"/>
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default CourseDetails;