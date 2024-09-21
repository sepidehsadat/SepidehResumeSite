import React, { Component } from "react";
// import { Link } from "react-router-dom";
//css
import style from "./ProjectItem.module.css"

export default class ProjectItem extends Component {
    render() {
        return (
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
        );
    }
}