import React, { Component } from "react";
import { Link } from "react-router-dom";
//css
import style from "./ContactMeItem.module.css"

export default class ContactMeItem extends Component {
    render() {
        return (
            <>
                <div className={style.contactme_item}>
                    <div className={style.description}>
                        <span className={style.title}>{this.props.title}</span>
                        <Link
                            className={style.link}
                            to={{ pathname: this.props.linkAddress }}
                            target="_blank">
                            {this.props.link}
                        </Link>
                    </div>
                    <img
                        src={this.props.logo}
                        className={style.logo}
                        alt='logo'
                    />
                </div>
            </>
        );
    }
}