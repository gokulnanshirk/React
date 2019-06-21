import React from "react";
import "./Main.css";
import { UserList } from "./userList";
import axios from "axios";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      product: []
    };
    console.log("this in constructor", this);
    this.clickFunction = this.clickFunction.bind(this);
    this.setCounter = this.setCounter.bind(this);
  }

  componentDidMount() {
    let promise = axios.get(
      "https://my-json-server.typicode.com/gokulnanshirk/api/products"
    );

    console.log(promise);
    let data = promise.then(res => {
      console.log(res);
      this.setState({
        selectedProducts: [],
        product: res.data
      });
    });
  }

  clickFunction(prod) {
    console.log("clicked on", prod, this);
    this.setState({
      selectedProducts: this.state.selectedProducts.concat([prod]),
      product: this.state.product.filter(sproduct => prod.id !== sproduct.id)
    });
  }

  setCounter(count, data) {
    data.count = count;
    console.log("set counter", data, this);
    this.setState({
      product: this.state.product
        .filter(sproduct => sproduct.id !== data.id)
        .concat([data])
    });
  }

  render() {
    const products = this.state.product;
    console.log("main", products);

    const main = (
      <div className="container">
        <div className="row">
          <div className="col">
            {products.map(product => (
              <UserList
                key={product.id}
                data={product}
                setCounter={this.setCounter}
                print={this.clickFunction}
              />
            ))}
          </div>
        </div>
      </div>
    );
    return main;
  }
}
