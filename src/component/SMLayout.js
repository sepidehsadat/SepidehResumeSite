import React, { Component } from "react";
import Header from "./Header/Header";

export default class SMLayout extends Component {
    render() {
        return (
            <div className="sm-layout">
                <Header />
                {this.props.children}
            </div>
        );
    }
}
