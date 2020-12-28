import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Footer from "../../components/Footer/Footer";


class CourseDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    constructor({match}) {
        super();
        this.state={
            id:match.params.courseId

        }

    }




    render() {
        return (
            <Fragment>


                <TopNavigation title="Course Details"></TopNavigation>
                <CourseDetails id={this.state.id}/>
                <Footer/>



            </Fragment>
        );
    }
}

export default CourseDetailsPage;