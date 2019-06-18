import React from "react";

export class CardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  setCount(value) {
    console.log("set Count", value);
    this.setState({
       count:this.state.count=value 
    })
    console.log("this state in cardBoby",this.state)
  }

  render() {
    return (
      <div className="card-body">
        <h5>{this.props.data.name}</h5>
        <h6>
          Quantity is <label>{this.props.data.count}</label>
        </h6>
        <input
          type="number"
          placeholder="Quantity"
          id="txt"
          className="btn primary"
          onChange={() => {
            this.setCount(document.getElementById("txt").value);
          }}
        />
        <button
          onClick={() => {
            this.props.setCounter(this.state.count,this.props.data);
          }}
        >
          Update Quantity
        </button>

        <button
          onClick={() => {
            this.props.print(this.props.data);
          }}
        >
          Add to cart
        </button>
      </div>
    );
  }
}
