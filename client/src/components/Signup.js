import React from 'react';


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
            <div>
                <form action="" method="POST">
                <label for="">username:
                <input 
                    type="text" 
                    name="email" 
                    onChange={this._handleEmail}
                    value={this.state.email}
                />
                </label>
                <br />
                <label for="">password:
                <input 
                    type="password" 
                    name="password" 
                    onChange={this._handlePassword}
                    value={this.state.password}
                />
                </label>
                <br />
                <label for="">password (again):
                <input 
                type="password" 
                name="password2" 
                onChange={this._handlePassword2}
                value={this.state.password2}
            />
                </label>
                <br />
                <input type="submit" />
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

    }

export default Signup;