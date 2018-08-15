import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <h3>
            Sign-up and get access to cool features to track your gear and build
            your pack. Add gear to your pack to se the weight, then shake it
            down. We're here to help you get outside.
            </h3>
            <div className="first">
            <label className="form-label">
                First Name:</label>
            <input
                className="form-input"
                type="text"
                name="firstName"
                onChange={this._handleFirstName}
                value={this.state.first_name}
            />
            <label className="form-label">
            Last Name:</label>
            <input
                className="form-input"
                type="text"
                name="lastName"
                onChange={this._handleLastName}
                value={this.state.last_name}
            />
            </div>
            <div className="second">
            <label className="form-label">
            Create Username:</label>
            <input
                className="form-input"
                type="text"
                name="email"
                onChange={this._handleEmail}
                value={this.state.email}
            />
            </div>
            <div className="password-input third">
            <label className="form-label">
                Create Password:</label>
                <input
                className="form-input"
                type="password"
                name="password"
                onChange={this._handlePassword}
                value={this.state.password}
            />
            <label className="form-label">
                Type Password Again:</label>
                <input
                className="form-input"
                type="password"
                name="password2"
                onChange={this._handlePassword2}
                value={this.state.password2}
            />
            </div>
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
            if (response.data.status !== 'okay') {
                alert("Try again hiker trash!")
            }

            else {
                this.props.history.push('/login')
            }
        console.log(response.data);
    })
        .catch(err => {
        console.log(err);
    });
};
}

export default Signup;
