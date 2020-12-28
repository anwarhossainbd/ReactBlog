import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";



class RefundSection extends Component {

    constructor() {
        super();
        this.state={
            myProject:"",
            loading:true,
            warning:false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.information).then(result=>{
             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {
                 this.setState({myProject: result[0]['refund'], loading: false})
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

            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col sm={12} lg={12} md={12}>
                                {ReactHtmlParser(this.state.myProject)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default RefundSection;