import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import TextLoading from "../TextLoading/TextLoading";
import WentWrong from "../WentWrong/WentWrong";


class Footer extends Component {


    constructor() {
        super();
        this.state={
            address:"....",
            email:"....",
            phone:"....",
            facebook:"....",
            youtube:".....",
            footer_credit:"....",
            loaderclass:"d-block",
            warning:false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.footerData).then(result=>{

            if (result==null){
                this.setState({
                    warning:true,

                })

            }
            else {
            this.setState(
                {address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
                facebook:result[0]['facebook'],
                youtube:result[0]['youtube'],
                footer_credit:result[0]['footer_credit'],
                loaderclass:"d-none",
            })}
        }).catch(error=>{
            this.setState({
                warning:true,

            })
        })




    }

    render() {

        if (this.state.warning==true){
            return <WentWrong></WentWrong>
        }

        else {



        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                    <Container className="">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Follow Me</h1>
                            <a className="socialLink" target="_blank" href={"//"+this.state.facebook}><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" target="_blank" href={"//"+this.state.youtube}><FontAwesomeIcon  icon={faYoutube} /> YouTube</a>
                        </Col>



                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Address</h1>

                              <span className={this.state.loaderclass}><TextLoading></TextLoading></span>

                            <p className="serviceDescription" > {this.state.address}</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} /> {this.state.email}</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} /> {this.state.phone}</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Information</h1>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>

                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="footerTitle">Legal</h1>
                            <Link className="footerLink" exact to="/Refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/TermsAndCondition" >Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                          </Container>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">{this.state.footer_credit} &copy; 2019-2020</a>
                </Container>

            </Fragment>
        );
    }}
}

export default Footer;