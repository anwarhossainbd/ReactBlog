import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import RefundSection from "../../components/RefundDescription/RefundSection";
import Footer from "../../components/Footer/Footer";
import TermsDescription from "../../components/TermsDescription/TermsDescription";

class TermsAndCondition extends Component {

     componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>

                <TopNavigation title="Terms & Condition"></TopNavigation>
                <PageTop pagetitle="Terms & Condition"></PageTop>
                <TermsDescription/>
                <Footer></Footer>




            </Fragment>
        );
    }
}

export default TermsAndCondition;