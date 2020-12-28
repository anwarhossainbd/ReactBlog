import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import AboutDescription from "../../components/AboutDescription/AboutDescription";
import Footer from "../../components/Footer/Footer";
import Courses from "../../components/Courses/Courses";
import AllCourses from "../../components/AllCourses/AllCourses";

class CoursesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>


                <TopNavigation title="Course"></TopNavigation>
                <PageTop pagetitle="All Courses"></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>










            </Fragment>
        );
    }
}

export default CoursesPage;