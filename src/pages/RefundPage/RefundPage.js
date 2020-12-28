import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import RefundSection from "../../components/RefundDescription/RefundSection";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

class RefundPage extends Component {
     componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Project Details"></TopNavigation>
                <PageTop pagetitle="Refund policy"></PageTop>
                <RefundSection></RefundSection>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default RefundPage;