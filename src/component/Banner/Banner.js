import React, { Component } from "react";
//css
import style from "./Banner.module.css"
import Sepideh from '../../assets/images/sepideh.png'

export default class Banner extends Component {
    render() {
        return (
            <div className={style.banner}>
                <div className="row " style={{ width: "100%" }}>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className={style.hello}>Hello I'm</h2>
                            <h3 className={style.name}>Sepideh</h3>
                            <h3 className={style.name}>Sadat</h3>
                            <h3 className={style.name}>Mazloumi</h3>
                            <h5 className={style.job}>Web Developer</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src={Sepideh}
                            className={style.sepideh}
                            alt='sepideh'
                        />
                    </div>
                </div>
            </div>
        );
    }
}
