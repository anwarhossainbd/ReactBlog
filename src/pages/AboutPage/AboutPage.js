import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import AboutDescription from "../../components/AboutDescription/AboutDescription";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>



                <TopNavigation title="About"></TopNavigation>
                <PageTop pagetitle="About Me"></PageTop>
                <AboutDescription></AboutDescription>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default AboutPage;