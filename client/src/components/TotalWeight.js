import React from "react";
import { Modal, Button } from "react-bootstrap";

class TotalWeight extends React.Component {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      weight: 0,
      selectedGear: [],
      show: false
    };
  }

  render() {

    //SORT THROUGH THE ARRAY OF RETURNED GEAR and MAKE EACH ONE ITS OWN P TAG
    let singleSelectedGear = this.props.chosenGear.map(singleGear => {
      return (
        <div>
          <p>
            {singleGear.name} / {singleGear.weight} oz.
          </p>
        </div>
      );
    });

    // THIS IS WHAT IS RENDERING //
    return (
      <div className="">
      <div className=" container weight-div ">
        <h3 className=" btn weight-btn">
          Total Weight:
          <span className="weight-number">
            {" "}
            {this._calculateTotalWeight()}
          </span>{" "}
          ounces
        </h3>
      
        <div className="modal-container" style={{ height: 50 }}>
          <Button
            className="see-your-pack-btn"
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
           ** Click Me to See What's In Your Pack **
          </Button>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">Your Pack</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {singleSelectedGear}
              <a href="#" onClick={this.props.clearWeight}>
                Empty Pack
              </a>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      

      
      </div>
    );
  }
  handleHide() {
    this.setState({ show: false });
  }

  _calculateTotalWeight = () => {
    let weight = 0;
    for (let item of this.props.chosenGear) {
      weight = weight + parseFloat(item.weight);
    }
    return weight;
  };
}

export default TotalWeight;
