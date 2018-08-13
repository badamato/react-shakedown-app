import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

class NewGearForm extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: ""
      }
    };
  }

  handlename = event => {
    this.setState({
      form: {
        ...this.state.form,
        name: event.target.value
      }
    });
  };

  //   _clearForm = event => {
  //     event.preventDefault();
  //     // console.log('clicked')
  //     this.setState({
  //       form: {
  //         name: ""
  //       }
  //     });
  //   };

  handleEntry = event => {
    event.preventDefault();

    let gearObject = {
      name: this.state.form.name
    };

    axios
      .post("/api/:user_id/addmygear", gearObject)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEntry} className="gear-form">
          <label htmlFor="Gear Name">Name: </label>
          <input
            value={this.state.form.name}
            type="text"
            onChange={this.handlename}
            required
            placeholder="Gear name"
          />
          <br />

          <input type="submit" value="Create Entry" className="hit-it" />

          <button onClick={this._clearForm} className="hit-it">
            Clear Form
          </button>
        </form>
      </div>
    );
  }
}

export default NewGearForm;
