import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="signup-wrapper">
        <form className="signup-form gear-form" onSubmit={this._handleSubmit}>
          <h1>Welcome to Shakedown!</h1>
          <p>Sign In</p>
          <label for="">
            username:
            <input
              type="text"
              name="email"
              onChange={this._handleEmail}
              value={this.state.email}
            />
          </label>
          <br />
          <label for="">
            password:
            <input
              type="password"
              name="password"
              onChange={this._handlePassword}
              value={this.state.password}
            />
          </label>
          <br />
          <input type="submit" className="hit-it" />
          <p>
            New to Shakedown?
            <Link to="/signup"> Let's sign you up!</Link>{" "}
          </p>
        </form>
      </div>
    );
  }

  _handleEmail = event => {
    const value = event.target.value;

    this.setState({
      email: value
    });
  };

  _handlePassword = event => {
    const value = event.target.value;

    this.setState({
      password: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/login/", this.state)
      .then(response => {

        if (response.data.status !== "okay") {
          alert("Try again hiker trash!");
        } else {
          this.props.history.push("/home");
        }
        console.log(response.data);

      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Login;
