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
      name: "",
      gender: null,
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
      formName: this.state.name,
      formGender: this.state.gender,
      formImg: this.state.image,
      formWeight: this.state.weight,
      formType_Name: this.state.type_name,
      formCat_Name: this.state.cat_name
    };

    //check that all input elements contain some data, if not, terminate handleSubmit
    if (formData.formName.length < 1) {
      return false;
    }

    axios
      .post("/api/:user_id/addmygear")
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      gender: null,
      image: "",
      weight: null,
      type_name: "",
      cat_name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="gear-form">
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

          {/* Submit  */}
          <br />
          <input type="submit" value="Create Entry" className="hit-it" />
        </form>
      </div>
    );
  }
}
export default NewGearForm;
