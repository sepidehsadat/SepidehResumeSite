import React, { Component } from "react";
import Title from "../../component/Title/Title";
import ContactMeItem from "../../component/ContactMe/ContactMeItem";
import Github from '../../assets/images/github.png'
import Instagram from '../../assets/images/instagram.png'
import Linkedin from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'
//css
import style from "./ContactMe.module.css"

export default class ContactMe extends Component {
    render() {
        return (
            <div className={style.contact_me} id={this.props.id}>
                <Title title="Contact Me" style={{ color: "#000" }} />
                <div className="row ">
                    <div className="d-flex gap-3 align-items-center justify-content-center">
                        <ContactMeItem title={"Github"} link={"@ssmazlumi"} linkAddress={"https://www.github.com/ssmazlumi"} logo={Github} />
                        <ContactMeItem title={"Email"} link={"ssmazlumi@gmail.com"} linkAddress={"mailto:ssmazlumi@gmail.com"} logo={Email} />
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex gap-3 align-items-center justify-content-center">
                        <ContactMeItem title={"Linkedin"} link={"sepideh-sadat-mazloumi"} linkAddress={"https://www.linkedin.com/in/sepideh-sadat-mazloumi/"} logo={Linkedin} />
                        <ContactMeItem title={"Instagram"} link={"@sepideh_sm7"} linkAddress={"https://instagram.com/sepideh_sm7"} logo={Instagram} />
                    </div>
                </div>
            </div>
        );
    }
}
