import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import soft from "../../Assets/Images/soft.jpg";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class AllProject extends Component {

    constructor() {
        super();
        this.state={
            myProject:[],
            loading:true,
            warning:false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{

            if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {
                this.setState({myProject:result,loading:false})
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
                return <Col className="mb-5" sm={12} md={6} lg={4}>
                    <Card className="projectCard">
                        <img height="220px" className="p-3" src={result.img_two}/>
                        <Card.Body>
                            <Card.Title className="projectCardTitle">{result.project_name}</Card.Title>
                            <Card.Text className="projectCardDes">
                                {result.short_description}
                            </Card.Text>
                            <Button variant="primary"><Link className="link-style"
                                                            to={"/details/" + result.id + "/" + result.project_name}>Details</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
            })


            return (
                <Fragment>

                    <Fragment>
                        <Container className="text-center mt-5">

                            <Row className="mb-5 mt-4">

                                {viewList}
                            </Row>

                        </Container>
                    </Fragment>

                </Fragment>
            );
        }
    }
}

export default AllProject;