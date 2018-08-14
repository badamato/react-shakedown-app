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
    let singleSelectedGear = this.props.chosenGear.map(singleGear => {
      return (
        <div>
          <p>
            {singleGear.name} / {singleGear.weight} oz.
          </p>
        </div>
      );
    });

    return (
      <div className="container weight-div ">
        <h3 className="total-weight">
          Total Weight:
          <span className="weight-number">
            {" "}
            {this._calculateTotalWeight()}
          </span>{" "}
          ounces
        </h3>
        <br />

        <br />

        {/* *******MODAL*********** */}
        <div className="modal-container" style={{ height: 200 }}>
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            See Your Pack
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
