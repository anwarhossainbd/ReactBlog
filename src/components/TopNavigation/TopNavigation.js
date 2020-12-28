import React, {Component, Fragment} from 'react';
import  {Navbar, Nav, NavDropdown, Row, Col,Container} from "react-bootstrap";
import navlogo from '../../Assets/Images/navlogo.svg'
import "../../Assets/Css/custom.css"
import "../../Assets/Css/responsive.css"
import navlogoscroll from '../../Assets/Images/navlogoScroll.svg'
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={

            navTit:"navTitle",
            navImage:[navlogo],
            navBarBackground:"navBackground",
            navVarient :"dark",
            navBarLetter :"navLetter",
        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({ navVarient:"light" ,navTit:"navTitleScroll",navBarLetter:"navLetterScroll" ,navImage:[navlogoscroll] ,navBarBackground:"navBackgroundScroll"})
        }
        else if (window.scrollY<100){
            this.setState({ navVarient:"dark" ,navTit:"navTitle", navBarLetter:"navLetter" , navImage:[navlogo],navBarBackground:"navBackground"})
        }
    }


    componentDidMount() {
        window.addEventListener(
            'scroll',this.onScroll
        )
    }

    render() {
        return (
            <Fragment>

                <title>{this.props.title}</title>

                <Container>


                    <Row>
                        <Col>
                            <Navbar  variant={this.state.navVarient} collapseOnSelect className={this.state.navBarBackground} fixed="top" expand="lg"  >
                                <Navbar.Brand href="#home" > <NavLink className={this.state.navTit}  to="/"> <img src={this.state.navImage} />   Md.Anwar Hossain  </NavLink>   </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">


                                    </Nav>
                                    <Nav>
                                      <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}}  className={this.state.navBarLetter} to="/">HOME</NavLink></Nav.Link>
                                       <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/services">SERVICES</NavLink></Nav.Link>
                                       <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/course">COURSES</NavLink></Nav.Link>
                                       <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                                       <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/contact">CONTACT</NavLink></Nav.Link>
                                       <Nav.Link><NavLink exact={true} activeStyle={{color:"deeppink"}} className={this.state.navBarLetter}  to="/about">ABOUT</NavLink></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>

                        </Col>
                    </Row>

                </Container>


            </Fragment>
        );
    }
}

export default TopNavigation;