import React, { Component } from "react";
import Title from "../../component/Title/Title";
import Slider from "../../component/Project/Slider";

//css
import style from "./Project.module.css"
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export default class Project extends Component {
    render() {
        return (
            <div className={style.project} id={this.props.id}>
                <Title title="Project" style={{ color: "#000" }} />
                <div className={style.parent_slider}>
                    <Slider />   
                </div>
            </div>
        );
    }
}