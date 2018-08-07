import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class NewGearForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      image: "",
      weight: 0,
      gearType: ""
    };
  }
  render() {
  
    return (
      <form>
        <input
          name="name"
          placeholder="Gear Name"
          value={this.state.name}
          onChange={e => this._change(e)}
        />
        <input
          name="gender"
          placeholder="Gender"
          value={this.state.gender}
          onChange={e => this._change(e)}
        />
        <input
          name="image"
          placeholder="Image"
          value={this.state.image}
          onChange={e => this._change(e)}
        />
        <input
          name="weight"
          placeholder="Weight in Ounces"
          value={this.state.weight}
          onChange={e => this._change(e)}
        />

        {/* <Select /> */}
        
        <button onClick={e => this._onSubmit(e)}>Submit</button>
      </form>
    );
  }
  _change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  _onSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      gender: "",
      image: "",
      weight: 0,
      gearType: ""
      //   category: ""
    });
  };

}

export default NewGearForm;
