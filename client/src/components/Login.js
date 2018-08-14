import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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

    }

export default Login;