import React, { Component } from "react";
//css
import style from "./Title.module.css"

export default class Title extends Component {
    render() {
        return (
            <div className={style.title}>
                <div>
                    <h3 className={style.title} style={this.props.style}>{this.props.title}</h3>

                </div>
            </div>
        );
    }
}