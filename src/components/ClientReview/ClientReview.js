import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../Assets/Images/firstday.jpg"

import Slider from "react-slick";
import {Container, Row,Col} from "react-bootstrap";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class ClientReview extends Component {


    constructor() {
        super();
        this.state={
            myProject:[],
            loading:true,
            warning:false,
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{

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


        const settings = {
            autoplay:true,
            autoplaySpeed:1500,
            dots: true,
            vertical:true,
            verticalSwiping: true,
            infinite: false,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1 ,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

        };


         const myList = this.state.myProject
        const viewList = myList.map(result=>{
            return     <div className="text-center">

                                    <img className="circuleImage"  src={result.client_img} />
                                    <h3  className="courseTitle mt-2">{result.client_title}</h3>
                                    <h4 className="courseDes">{result.client_description}</h4>

                                </div>
        })




 if (this.state.loading == true) {
            return <Loader></Loader>
        }

         else if (this.state.warning==true){
            return <WentWrong></WentWrong>
        }


        else {


        return (
            <Fragment>

                <Container >
                    <h1 className=" headerTitleT mb-5 text-center">Client Says</h1>

                    <Row className="justify-content-center">
                        <Col className="text-center " lg={6} sm={6} md={6}>

                            <Slider {...settings}>



                                {viewList}



                            </Slider>

                        </Col>
                    </Row>
                </Container>




            </Fragment>
        );
    }}
}

export default ClientReview;