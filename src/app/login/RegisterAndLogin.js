import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";

import "./RegisterAndLogin.css";

class RegisterAndLogin extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="appAside">
            <h2>BitBook</h2>
            <p>
            BitBook is a simple Social Media Application.
            <br/>
            <br/>
            It is currently open for easy viewing of content, so please just click on Login to enter.
            </p>
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/login"
                activeClassName="pageSwitcherItem--Active"
                className="pageSwitcherItem"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                activeClassName="pageSwitcherItem--Active"
                className="pageSwitcherItem"
              >
                Register
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/login"
                activeClassName="formTitleLink--Active"
                className="formTitleLink"
              >
                Login
              </NavLink>{" "}
              or{" "}
              <NavLink
                to="/register"
                activeClassName="formTitleLink--Active"
                className="formTitleLink"
              >
                Register
              </NavLink>
            </div>

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default RegisterAndLogin;
