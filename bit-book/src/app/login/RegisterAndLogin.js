import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

import './RegisterAndLogin.css';

class RegisterAndLogin extends Component {
  render() {
    return (
      <Router basename="/bit-book/">
        <div className="app">
          <div className="appAside"></div>
          <div className="appForm">
            <div className="pageSwitcher">
                <NavLink to="/login" activeClassName="pageSwitcherItem--Active" className="pageSwitcherItem">Login</NavLink>
                <NavLink exact to="/" activeClassName="pageSwitcherItem--Active" className="pageSwitcherItem">Register</NavLink>
              </div>

              <div className="formTitle">
                  <NavLink to="/login" activeClassName="formTitleLink--Active" className="formTitleLink">Login</NavLink> or <NavLink exact to="/" activeClassName="formTitleLink--Active" className="formTitleLink">Register</NavLink>
              </div>

              <Route exact path="/" component={Register}>
              </Route>
              <Route path="/login" component={Login}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default RegisterAndLogin;
