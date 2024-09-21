import React, { Component } from "react";
import { Link } from "react-router-dom";
//css
import style from "./WorkedItem.module.css"

export default class WorkedItem extends Component {
    render() {
        return (
            <>
                <div className={style.worked_item}>
                    <img
                        src={this.props.logo}
                        className={style.logo}
                        alt='logo'
                    />
                    <span className={style.description}>{this.props.description}</span>
                    <span className={style.description}>{this.props.date}</span>
                    <Link
                        className={style.link}
                        to={{ pathname: this.props.linkAddress }}
                        target="_blank">
                        {this.props.link}
                    </Link>
                </div>
            </>
        );
    }
}