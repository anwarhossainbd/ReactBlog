import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import TermsDescription from "../../components/TermsDescription/TermsDescription";
import Footer from "../../components/Footer/Footer";
import PrivacyDescription from "../../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"></TopNavigation>
                <PageTop pagetitle="Privacy Policy"></PageTop>
                <PrivacyDescription/>
                <Footer></Footer>



            </Fragment>
        );
    }
}

export default PrivacyPage;