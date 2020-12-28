import React, {Component, Fragment} from 'react';
import {Card, Container,Row,Col,Modal,Button} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'video-react/dist/video-react.css'; // import css

import { Player, BigPlayButton } from 'video-react';

import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class Video extends Component {


    constructor() {
        super();
        this.state={
            show:false ,
            video_description:"...",
            video_url:"...",
             loading:true,
              warning:false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.videoHome).then(result=>{

              if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {

            this.setState({video_description:result[0]['video_description'],
                                 video_url:result[0]['video_url'], loading:false
            })

            }}

        ).catch(error=>{
                            this.setState({warning:true,loading:false})

        })
    }

    handleClose=()=>{
        this.setState({show:false})
    }

    handleShow=()=>{
        this.setState({show:true})
    }





    render() {

        if (this.state.loading == true) {
            return <Loader></Loader>
        }

          else if (this.state.warning==true){
            return <WentWrong></WentWrong>
        }



        else {


            return (
                <Fragment>


                    <Container className="pb-5">
                        <Row c>
                            <Col lg={12} md={12} sm={12} className="text-center ">

                                <Card className="videoBack pb-4">
                                    <Card.Header className="text-justify headerOfCard">How I Do ?</Card.Header>


                                    <Card.Text className="techonologyText mt-5">

                                        <p className="videoDes m-3 text-justify">{this.state.video_description}</p>


                                        <span className="videocom" style={{color: "blue"}}>   <FontAwesomeIcon
                                            onClick={this.handleShow} icon={faPlayCircle}/>  </span>
                                    </Card.Text>


                                </Card>

                            </Col>
                        </Row>
                    </Container>


                    <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <Player>
                                <source src={this.state.video_url}/>
                                <BigPlayButton position="center"/>
                            </Player>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>


                </Fragment>
            );
        }
    }
}

export default Video;