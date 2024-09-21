import React, { Component } from "react";
import Banner from "../../Banner/Banner";
import AboutUs from "../../AboutUs/AboutUs";
import Skills from "../../Skills/Skills";
import Worked from "../../Worked/Worked";
import Project from "../../Project/Project";
import ContactMe from "../../ContactMe/ContactMe";
import Footer from "../../Footer/Footer";

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Banner />
                <AboutUs id="about-us"/>
                <Worked id="worked"/>
                <Skills id="skills"/>
                <Project id="project"/>
                <ContactMe id="contact-me"/>
                <Footer />

            </div>
        );
    }
}