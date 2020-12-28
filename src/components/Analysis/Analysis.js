import React, {Component, Fragment} from 'react';
import  {Container, Row,Col} from "react-bootstrap";
import  {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from "recharts";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";


class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
            ],
            text:"....",
            loading:true,
             warning:false,
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.ChartData).then(result=>{

             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {

                 this.setState({data: result,loading:false})
             }
        }).catch(error=>{
                this.setState({warning:true,loading:false})
        })

        RestClient.GetRequest(AppUrl.TechDesc).then(result=>{

             if (result==null){
                this.setState({warning:true,loading:false})
            }
            else {

                 this.setState({text: result[0]['tech_description']})
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
                    <Container className="mb-5">
                        <h1 className=" headerTitleT mb-5 text-center">Technology Used</h1>
                        <Row className="mt-5">

                            <Col style={{width: "100%", height: "300px"}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="x_data"/>
                                        <Tooltip/>
                                        <Bar dataKey="y_data" fill="#8884d8"/>
                                    </BarChart>
                                </ResponsiveContainer>

                            </Col>

                            <Col lg={6} md={12} sm={12} className="techonologyText  pr-4 pl-4">

                                {ReactHtmlParser(this.state.text)}


                            </Col>

                        </Row>
                    </Container>

                </Fragment>
            );
        }
    }
}

export default Analysis;