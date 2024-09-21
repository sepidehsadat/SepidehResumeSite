import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
//css
import style from "./SkillsItem.module.css"

export default class SkillsItem extends Component {
    render() {
        return (
            <>
                
                    <div className={style.skills_item}>
                        <div className={style.header}>
                            <div className={style.parent_logo} style={this.props.style}>
                                <img
                                    src={this.props.logo}
                                    className={style.logo}
                                    alt='logo'
                                />
                            </div>
                            <span className={style.title}>{this.props.title}</span>
                        </div>
                        <div className={style.progress_bar}>
                            <ProgressBar animated  now={this.props.progressBar} label={`${this.props.progressBar}%`} />
                        </div>
                    </div>
             
            </>
        );
    }
}