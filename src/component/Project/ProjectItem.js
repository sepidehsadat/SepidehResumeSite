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
				<Link to={Routes.ProductDetail }>
				<div className={style.project_item} >
					<img
						src={this.props.image}
						className={style.image}
						alt='image'
					/>
					<div className={style.parent_text}>
						<span className={style.title}>{this.props.title}</span>
						<p className={style.description}>{this.props.description}</p>
					</div>
				</div>
			</Link>
		);
	}
}