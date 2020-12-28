import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courses from "../../Assets/Images/courses.jpg"
import {Link} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class Courses extends Component {


     constructor() {
        super();
        this.state={
            myProject:[],
              loading:true,
              warning:false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {
                 this.setState({myProject: result, loading: false})
             }
        }).catch(error=>{
                this.setState({warning:true,loading:false})
        })
    }



    render() {

        if (this.state.loading == true) {
            return <Loader></Loader>
        }
          else if (this.state.warning==true){
            return <WentWrong></WentWrong>
        }


        else {

            const myList = this.state.myProject
            const viewList = myList.map(result => {
                return <Col lg={6} md={12} sm={12}>
                    <Row className="m-3">
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={result.small_img}/>
                        </Col>
                        <Col className="mt-2" lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle mt-2">{result.short_title}</h5>
                            <p className="text-justify courseDes">{result.short_description}</p>
                            <Link className="courseDetails float-left" to={"/CourseDetails/" + result.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })


            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="headerTitleC">OUR COURSES</h1>
                        <Row className="mt-5">

                            {viewList}


                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Courses;