import React, {Component, Fragment} from 'react';
import  {Container, Row,Col,Button} from "react-bootstrap";
import "../../Assets/Css/custom.css"
import axios from "axios"
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import TextLoading from "../TextLoading/TextLoading";

class TopBanner extends Component {


    constructor() {
        super();
        this.state={
            home_title:"",
            home_subtitle:"",
            loaderclass:"d-block",

        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{

            this.setState({home_title:result[0]['home_title'],home_subtitle:result[0]['home_subtitle'],loaderclass:"d-none"})
        }).catch(error=>{
            this.setState({home_title:"????",home_subtitle:"?????"})

        })
    }

    render() {
        return (
            <Fragment>
              <Container fluid={true} className="topFixedBanner p-0">
                  <div className="topBannerOverlay">
                      <Container className="topContent">
                          <Row>
                              <Col className="text-center">
                                  <span className={this.state.loaderclass}><TextLoading></TextLoading></span>
                                  <h1 className="topTitle">{this.state.home_title}</h1>
                                  <h3 className="topSubTitle" >{this.state.home_subtitle}</h3>
                                  <Button variant="primary">More Info</Button>
                              </Col>
                          </Row>
                      </Container>
                  </div>
              </Container>

            </Fragment>
        );
    }
}

export default TopBanner;