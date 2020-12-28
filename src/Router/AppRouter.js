import React, {Component, Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import RefundPage from "../pages/RefundPage/RefundPage";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage";

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>
                    <Route exact={true}  path="/about" component={AboutPage}/>
                    <Route exact={true} path="/contact" component={ContactPage}/>
                    <Route exact={true} path="/course" component={CoursesPage}/>
                    <Route exact={true} path="/portfolio" component={PortfolioPage}/>
                    <Route exact={true} path="/services" component={ServicesPage}/>
                    <Route exact={true} path="/Refund" component={RefundPage}/>
                    <Route exact={true} path="/TermsAndCondition" component={TermsAndCondition}/>
                    <Route exact={true} path="/Privacy" component={PrivacyPage}/>
                    <Route exact={true} path="/details/:projectId/:projectName" component={ProjectDetailsPage}/>
                    <Route exact={true} path="/CourseDetails/:courseId" component={CourseDetailsPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRouter;