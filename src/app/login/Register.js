import React, { Component } from "react";
import { Link } from "react-router-dom";

import registerUser from "../../services/registerUser";
import "./RegisterAndLogin.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      errorMsg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(value, name);

    this.setState({
      [name]: value
    });
  }

  getResponse = () => {
    registerUser(this.state)
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit(event) {
    // const { name, email, password } = this.state;

    event.preventDefault();

    if (
      !this.validateFullName().valid &&
      !this.validatePassword().valid &&
      !this.validateEmail().valid
    ) {
      return this.getResponse();
    }
  }

  validateFullName = name => {
    if (!name) {
      return "Full name is required!";
    } else if (name.length < 3) {
      return "Min length is 3!";
    }
    return null;
  };

  validatePassword = password => {
    if (!password) {
      return "Password is required!";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return null;
  };

  validateEmail = email => {
    if (!email) {
      return "E-mail is required!";
    } else if (!email.includes("@")) {
      return "Email is not valid";
    }
    return null;
  };

  render() {
    const validateFullName = this.validateFullName();
    const validatePassword = this.validatePassword();
    const validateEmail = this.validateEmail();

    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              error={validateFullName}
              autoComplete="off"
            /><span className="helper-text" data-error={validateFullName || ""}>{validateFullName || ""}</span>

          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              error={validatePassword}
              autoComplete="off"
            />
            <span className="helper-text" data-error={validatePassword || ""}>{validatePassword || ""}</span>
            <div className="formField">
            </div>
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              error={validateEmail}
              autoComplete="off"
            />
            <span className="helper-text" data-error={validateEmail || ""}>{validateEmail || ""}</span>
          </div>

          <div className="formField">
            <button
              className="formFieldButton mr-20"
              type="submit"
              onClick={this.getResponse}
            >
              Register
            </button>
            <Link to="/login" className="FormFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Register;
