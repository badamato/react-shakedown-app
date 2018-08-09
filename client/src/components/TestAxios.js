import React from 'react';
import axios from 'axios';

export default class GearName extends React.Component {
    state = {
        name: [],
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then (res => {
                console.log(res);
                this.setState({ name: res.data });
            });
    }

    render() {
        return(
            
        )
    }
}