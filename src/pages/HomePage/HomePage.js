import React, {Component, Fragment} from 'react';
import TopBanner from "../../components/TopBanner/TopBanner";
import Services from "../../components/Services/Services";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import Analysis from "../../components/Analysis/Analysis";
import Summery from "../../components/Summery/Summery";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Courses from "../../components/Courses/Courses";
import Video from "../../components/Video/video";
import ClientReview from "../../components/ClientReview/ClientReview";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>



                <TopBanner></TopBanner>
                <Services></Services>
                <TopNavigation title="Home"></TopNavigation>
                <Analysis></Analysis>
                <Summery></Summery>
                <RecentProjects></RecentProjects>
                <Courses></Courses>
                <Video></Video>
                <ClientReview></ClientReview>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default HomePage;