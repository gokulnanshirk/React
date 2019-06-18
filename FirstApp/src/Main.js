import React from "react";
import "./Main.css";
import { UserList } from "./userList";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedProducts:[],
      product: [
        { id: "1", name: "Apple", price: 65000 ,count:0},
        { id: "2", name: "MicroSoft", price: 95000 ,count:0},
        { id: "3", name: "Dell", price: 25000 ,count:0},
        { id: "4", name: "Lenovo", price: 25000 ,count:0},
        { id: "5", name: "Hp", price: 25000 ,count:0}

      ]
    };
    console.log("this in constructor",this)
    this.clickFunction=this.clickFunction.bind(this)
    this.setCounter=this.setCounter.bind(this)
    
  }

  clickFunction(prod) {
    console.log("clicked on", prod,this);
    this.setState({
        selectedProducts:this.state.selectedProducts.concat([prod]),
        product:this.state.product.filter(sproduct =>   prod.id !== sproduct.id)
    })
  }

  setCounter(count,data){
    data.count=count;
    console.log("set counter",data,this)
    this.setState({
      
      product:this.state.product.filter(sproduct =>   sproduct.id !== data.id).concat([data])
  }) 
  }



  render() {
    const products = this.state.product;
    console.log("main", products);

    const main = (
      <div className="container">
        <div className="row">
          <div className="col-4">
            {products.map(product => (
              <UserList key={product.id} data={product} setCounter={this.setCounter}  print={this.clickFunction}/>
            ))}
          </div>
        </div>
      </div>
    );
    return main;
  }
}
