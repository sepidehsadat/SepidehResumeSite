import React, { Component } from "react";
import Title from "../../component/Title/Title";
import Data from '../../api/Data';
import ProjectItem from '../../component/Project/ProjectItem';

//css
import style from "./Project.module.css"
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export default class Project extends Component
{
	render()
	{
		const projects = Data.getProjects();
		return (
			<div className={style.project} id={this.props.id}>
				<Title title="Project" style={{ color: "#000" }} />
				<div className={style.parent_slider}>
					{projects.map((item, j) =>
					{
						return (
							<ProjectItem item={item}/>
						)
					})}
				</div>
			</div>
		);
	}
}