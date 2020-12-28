import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";

import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

class ContactPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>


                <TopNavigation title="Contact"></TopNavigation>
               <PageTop pagetitle="Contact"></PageTop>
                <ContactSection></ContactSection>
                <Footer></Footer>




            </Fragment>
        );
    }
}

export default ContactPage;