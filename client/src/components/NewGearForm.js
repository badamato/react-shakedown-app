import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

//   let user_id = req.body.user_id;
// let name = req.body.name;
// let gender = req.body.gender;
// let image = req.body.image;
// let weight = req.body.weight;
// let type_name = req.body.type_name;
// let cat_name = req.body.cat_name;
class NewGearForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
      name: "",
      gender: "",
      image: "",
      weight: 0,
      type_name: "",
      cat_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //take the data ans saves it to state object we create in constructor
  handleChange = e => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };

  //handles submitting the form
  handleSubmit = (e, message) => {
    //prevent the form from submitting
    e.preventDefault();
    //take the data from state we created in constructor and store them as an object in a new variable called formData
    let formData = {
      user_id: this.state.user_id,
      name: this.state.name,
      gender: this.state.gender,
      image: this.state.image,
      weight: this.state.weight,
      type_name: this.state.type_name,
      cat_name: this.state.cat_name
    };

    //check that all input elements contain some data, if not, terminate handleSubmit
    if (formData.name.length < 1) {
      return false;
    }

    axios
      .post("/api/1/addmygear", formData)
      .then(res => {
        // return res.data;
        this.props.history.push("/mygear");
      })
      .catch(err => console.log(err));

    // this.setState({
    //   name: "",
    //   gender: null,
    //   image: "",
    //   weight: null,
    //   type_name: "",
    //   cat_name: ""
    // });

    console.log("Data sent!");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="gear-form ">
          {/* UserID */}
          <label>User Id:</label>
          <input
            className=""
            name="user_id"
            value={this.state.user_id}
            type="number"
            onChange={this.handleChange}
            required
          />
          <br />
          {/* NAME */}
          <label>Name: </label>
          <input
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
            placeholder="Gear name"
            required
          />
          <br />
          {/* GENDER */}
          <label>Gender: </label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            required
          >
            <option>null</option>
            <option>M</option>
            <option>F</option>
          </select>

          <br />
          {/* Image */}
          <label>Image: </label>
          <input
            name="image"
            value={this.state.image}
            type="text"
            onChange={this.handleChange}
            required
            placeholder="URL"
          />
          <br />
          {/* Weight */}
          <label>Weight: </label>
          <input
            name="weight"
            value={this.state.weight}
            type="number"
            step="0.01"
            onChange={this.handleChange}
          />

          <br />
          {/* type_name */}
          <label>Type name:</label>
          <select
            name="type_name"
            componentClass="select"
            value={this.state.type_name}
            onChange={this.handleChange}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <br />
          {/* cat_name */}
          <label>Category name:</label>
          <select
            name="cat_name"
            componentClass="select"
            value={this.state.cat_name}
            onChange={this.handleChange}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>

          {/* Submit  */}
          <br />
          <input type="submit" value="Create Entry" className="hit-it" />
        </form>
      </div>
    );
  }
}
export default NewGearForm;
