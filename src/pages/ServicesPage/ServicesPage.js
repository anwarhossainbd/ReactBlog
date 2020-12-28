import React, {Component,Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import AllProject from "../../components/AllProject/AllProject";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import ContactSection from "../../components/ContactSection/ContactSection";

class ServicesPage extends Component {

     componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>



                <TopNavigation title="Services"></TopNavigation>
                <PageTop pagetitle="My Services"></PageTop>
                <Services></Services>
                <ContactSection></ContactSection>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default ServicesPage;