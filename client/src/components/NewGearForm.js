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

 

  handlename = (event) => {
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

  handleEntry  = (event) => {
    event.preventDefault();

    let companyObject = {
      name: this.state.form.name
    };

    axios
      .post("/api/:user_id/addmygear", companyObject)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleEntry}
        >
          <label htmlFor="Company Name">Company</label>
          <input
            value={this.state.form.name}
            type="text"
            onChange={this.handlename}
            required
            placeholder="Enter your company name"
          />
          <br />

          <input type="submit" value="Create Entry" />
          <button onClick={this._clearForm}>Clear Form</button>
        </form>
      </div>
    );
  }
}

export default NewGearForm;
