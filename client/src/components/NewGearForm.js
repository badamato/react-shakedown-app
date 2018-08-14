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

    console.log("Data sent!");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="gear-form ">
          {/* UserID */} <h1>Add New Gear</h1>
          <h2>Please Enter All Fields</h2>
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
          <label>Name of Gear: </label>
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
          <label>Gender (Please pick Null, Male, Female): </label>
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
          <label>Gear Image (Use a url): </label>
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
          <label>Weight(ounces): </label>
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
          <p>Types are the sub-category</p>
          <p>1:Backpack</p>
          <p>2:Shelter</p>
          <p>3:Sleeping Bag</p>
          <p>4:Sleeping Pad </p>
          <p>5:Stove </p>
          <p>6:Cookware </p>
          <p>7:Water filter/ purifier </p>
          <p>8:Water bottle/ reservoir </p>
          <p>9: Headlamp </p>
          <p>10: Navigation </p>
          <p>11:First-Aid </p>
          <p>12: Repair-kit </p>
          <p>13:Other Essentials </p>
          <p>14: Top-Baselayer</p>
          <p>15: Bottom-Baselayer </p>
          <p>16:Undergarments </p>
          <p>17: Hiking Bottom  </p>
          <p>18: Hiking Top</p>
          <p>19: Outerwear (Clothing) </p>
          <p>20: Boots/Shoes (Footwear)</p>
          <p>21:Socks </p>
          <p>22: Tools</p>
          <p>23: Outerwear(Optional)</p>
          <p>25: Compression/ stuff sacks</p>
          <p>25: Camp Shoes</p>
          <p>26: Journal/ Books/ Camp Chairs / Luxury Items/ Other</p>
          <p>27: Personal Hygiene </p>
          <p>28: Pillow</p>
          
          <p>Please Select A Number</p>
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
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
          </select>
          <br />
          {/* cat_name */}
          <label>Category name:</label>
          <p>What category would you like to store your sub-category in?</p>
          <p>1: Essentials </p>
          <p>2: Clothing </p>
          <p>3: Footwear </p>
          <p>4: Optional </p>
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
