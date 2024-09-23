import React, { Component } from "react";
//css
import style from "./ProjectItem.module.css"
import { Link } from 'react-router-dom';
import Routes from "../../Routes";

export default class ProjectItem extends Component
{
	render()
	{
		return (
			<Link className={style.link_card} to={`/project_detail/${this.props.item.key}`}>
				<div className={style.project_item} >
					<img
						src={this.props.item.images[0]}
						className={style.image}
						alt='image'
					/>
					<div className={style.parent_text}>
						<span className={style.title}>{this.props.item.title}</span>
						<p className={style.description}>{this.props.item.description}</p>
					</div>
				</div>
			</Link>
		);
	}
}