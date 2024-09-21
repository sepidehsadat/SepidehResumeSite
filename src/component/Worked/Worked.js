import React, { Component } from "react";
import WorkedItem from "../../component/Worked/WorkedItem";
import Title from "../../component/Title/Title";
import Sefaresh from '../../assets/images/sefaresh.jfif';
import Namira from '../../assets/images/namira.jfif';

//css
import style from "./Worked.module.css"

export default class Worked extends Component {
    render() {
        return (
            <div className={style.worked} id={this.props.id}>
                <div>
                    <Title title="where I've Worked" style={{ color: "#fff" }} />
                    <div className={style.parent_item}>
                        <WorkedItem link={"Sefaresh.net"} linkAddress={"https://www.sefaresh.net"} date={"2017 - 2019"} description={"Front End Developer"} logo={Sefaresh} />
                        <WorkedItem link={"NamiraSoft"} linkAddress={"https://www.namirasoft.ir"} date={"2020 - 2024"} description={"Reactjs Developer"} logo={Namira} />
                    </div>
                </div>
            </div>
        );
    }
}