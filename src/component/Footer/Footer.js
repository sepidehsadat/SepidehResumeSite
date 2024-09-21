import React, { Component } from "react";
//css
import style from "./Footer.module.css"

export default class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <p className={style.title}> © 2022 Sepideh Sadat Mazloumi.All Rights Reserved.</p>
            </div>
        );
    }
}