import React from 'react';
import axios from 'axios';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: ''
        };
    }

    render() {
        return (
            <div className="signup-wrapper">
                <form 
                className="signup-form" 
                onSubmit={this._handleSubmit}>
                <label className="form-label" for="">username:
                <input 
                    className="form-input"
                    type="text" 
                    name="email" 
                    onChange={this._handleEmail}
                    value={this.state.email}
                />
                </label>
                <br />
                <label className="form-label" for="">password:
                <input 
                    className="form-input"
                    type="password" 
                    name="password" 
                    onChange={this._handlePassword}
                    value={this.state.password}
                />
                </label>
                <br />
                <label className="form-label" for="">password (again):
                <input 
                className="form-input"
                type="password" 
                name="password2" 
                onChange={this._handlePassword2}
                value={this.state.password2}
                />
                </label>
                <br />
                <input className="input-button" type="submit" />
                </form>
            </div>
        );
    }

    _handleEmail = (event) => {
        const value = event.target.value;

        this.setState({
            email: value
        }) 
    }

    _handlePassword = (event) => {
        const value = event.target.value;

        this.setState({
            password: value
        }) 
    }

    _handlePassword2 = (event) => {
        const value = event.target.value;

        this.setState({
            password2: value
        }) 
    }

    _handleSubmit = (event) => {
        event.preventDefault();

        axios.post('/api/signup/', this.state)
            .then((response) => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    }

export default Signup;