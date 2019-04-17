import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";

import "./RegisterAndLogin.css";

class RegisterAndLogin extends Component {
  render() {
    return (
      <Router basename="/bit-book/">
        <div className="app">
          <div className="appAside">
            <h2>BitBook</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ut aliquet magna. Vivamus enim ipsum, facilisis ut
              auctor a, rutrum quis urna. Nam sollicitudin scelerisque mauris at
              semper. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Donec elit ex, fringilla nec porttitor vehicula,
              ultrices in orci. Proin varius lorem sed nisl finibus pellentesque
              vitae placerat lacus. Suspendisse vel aliquet mauris, quis
              sagittis mauris. Quisque porttitor, magna vitae suscipit volutpat,
              risus tortor convallis augue, et viverra ligula enim in quam.
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
                exact
                to="/"
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
                exact
                to="/"
                activeClassName="formTitleLink--Active"
                className="formTitleLink"
              >
                Register
              </NavLink>
            </div>

            <Route exact path="/" component={Register} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default RegisterAndLogin;
