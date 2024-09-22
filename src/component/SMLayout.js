import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default class SMLayout extends Component {
    render() {
        return (
            <div className="sm-layout">
                <Header />
				{this.props.children}
				<Footer />
            </div>
        );
    }
}
