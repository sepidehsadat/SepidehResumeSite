import React, { Component } from "react";
import Title from "../../component/Title/Title";
//css
import style from "./AboutUs.module.css"

export default class AboutUs extends Component
{
	render()
	{
		return (
			<div className={style.aboutus} id={this.props.id}>
				<div>
					<Title title="About Us" style={{ color: "#000" }} />
					<p className={style.description}>
						Hi I'm Sepideh Sadat Mazloumi
						<br />
						I am a front-end developer with over 5 years of experience specializing in Next.js and React with TypeScript.
						<br />
						My passion lies in creating modern, responsive, and user-friendly web applications that provide seamless user experiences.
						<br />
						I hold a Bachelor's degree in Software Engineering from the Technical and Vocational University of Sari.
						<br />
						I love Learning More and Gaining More Information About Technology.
					</p>
				</div>
			</div>
		);
	}
}