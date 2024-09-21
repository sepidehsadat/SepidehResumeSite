import React, { Component } from "react";
import Title from "../../component/Title/Title";
//css
import style from "./AboutUs.module.css"

export default class AboutUs extends Component {
    render() {
        return (
            <div className={style.aboutus} id={this.props.id}>
                <div>
                    <Title title="About Us" style={{ color: "#000" }} />
                    <p className={style.description}>
                        Hi I'm Sepideh Sadat Mazloumi
                        <br />
                        I'm a Software Engineer Who Graduated From Sari Technical College.
                        <br />
                        I Have 5 years of Experience in The Frontend Field,
                        <br />
                        I love Learning More and Gaining More Information About Technology
                    </p>
                </div>
            </div>
        );
    }
}