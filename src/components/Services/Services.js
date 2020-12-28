import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Card,Button} from "react-bootstrap";
import frontend from '../../Assets/Images/frontend.jpg' ;
import software from '../../Assets/Images/software.jpg' ;
import web from '../../Assets/Images/web.jpg' ;
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class Services extends Component {


    constructor() {
        super();
        this.state={
            myData:[],
              loading:true,
             warning:false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.services).then(result=>{

             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {
                 this.setState({myData: result, loading: false})
             }
        })
            .catch(error=>{
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

            const myList = this.state.myData
            const viewData = myList.map(result => {

                return <Col lg={4} md={6} sm={12}>


                    <div className="cardOperation">
                        <Card.Img variant="top" className="cardImage" src={result.service_logo}/>
                        <Card.Body>
                            <h3 className="cardHeader">{result.service_name}</h3>
                            <div className="cardText">
                                {result.services_description}

                            </div>

                        </Card.Body>
                    </div>


                </Col>


            })

            return (
                <Fragment>
                    <Container>

                        <h1 className=" headerTitle mb-5 text-center">MY SERVICES</h1>

                        <Row className="m-auto">


                            {viewData}


                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Services;