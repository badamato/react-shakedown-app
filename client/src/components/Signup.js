import React from "react";
import axios from "axios";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  render() {
    return (
      <div className="signup-wrapper">
        <form className="signup-form gear-form" onSubmit={this._handleSubmit}>
          <h1>Welcome to Shakedown!</h1>
          <p>
            Sign-up and get access to cool features to track your gear and build
            your pack. Add gear to your pack to se the weight, then shake it
            down. We're here to help you get outside.
          </p>
          <div className="first-line">
            <label className="form-label">
              First Name:
              <input
                className="form-input"
                type="text"
                name="firstName"
                onChange={this._handleFirstName}
                value={this.state.first_name}
              />
            </label>
            <br />
            <label className="form-label">
              Last Name:
              <input
                className="form-input"
                type="text"
                name="lastName"
                onChange={this._handleLastName}
                value={this.state.last_name}
              />
            </label>
          </div>
          <br />
          <label className="form-label">
            Create Username:
            <input
              className="form-input"
              type="text"
              name="email"
              onChange={this._handleEmail}
              value={this.state.email}
            />
          </label>
          <br />
          <div className="password-input">
            <label className="form-label">
              Create Password:
              <input
                className="form-input"
                type="password"
                name="password"
                onChange={this._handlePassword}
                value={this.state.password}
              />
            </label>
            <br />
            <label className="form-label">
              Type Password Again:
              <input
                className="form-input"
                type="password"
                name="password2"
                onChange={this._handlePassword2}
                value={this.state.password2}
              />
            </label>
          </div>
          <br />
          <input className="input-button hit-it" type="submit" />
        </form>
      </div>
    );
  }

  _handleFirstName = event => {
    const value = event.target.value;

    this.setState({
      first_name: value
    });
  };

  _handleLastName = event => {
    const value = event.target.value;

    this.setState({
      last_name: value
    });
  };

  _handleGender = event => {
    const value = event.target.value;

    this.setState({
      gender: value
    });
  };

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

  _handlePassword2 = event => {
    const value = event.target.value;

    this.setState({
      password2: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/signup/", this.state)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Signup;
