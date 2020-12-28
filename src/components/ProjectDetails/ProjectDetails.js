import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import img from '../../Assets/Images/prodetails.jpg'
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class ProjectDetails extends Component {


    constructor() {
        super();
        this.state={
            img_two:"",
            project_name:"",
            short_description:"",
            project_features:"",
            loading:true,
            warning:false

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.props.id).then(result=>{

             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {

                 this.setState({
                     img_two: result[0]['img_two'],
                     project_name: result[0]['project_name'],
                     short_description: result[0]['short_description'],
                     project_features: result[0]['project_features'],
                     loading: false,

                 })
             }

        }).catch(error=>{
                this.setState({warning:true,loading:false})

        })
    }


    render() {

        if (this.state.loading==true){
            return  <Loader></Loader>
        }
         else if (this.state.warning==true){
            return <WentWrong></WentWrong>
        }


        else {

            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                                <img src={this.state.img_two} width={"100%"} height="320px"/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName pt-3">{this.state.project_name} </h2>
                                <p className="serviceDescription">{this.state.short_description} </p>

                                <p>
                                    {ReactHtmlParser(this.state.project_features)}

                                </p>


                                <Button variant="primary">More Info</Button>
                            </Col>


                        </Row>
                    </Container>


                </Fragment>
            );
        }
    }
}

export default ProjectDetails;