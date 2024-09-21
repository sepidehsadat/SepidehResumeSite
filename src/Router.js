import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import SMLayout from "./component/SMLayout";
import HomePage from "./component/pages/Home/HomePage";

export default class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path={Routes.Home}>
              <SMLayout >
                <HomePage />
              </SMLayout>
            </Route>
           
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
