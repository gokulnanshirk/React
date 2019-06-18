import React from 'react';

export class CardBody extends React.Component {

    render(){
        return (
             <div className="card-body">
                 <h5>
                 {this.props.data.name}
                 </h5>
                 <p>Qtt{this.props.data.count}</p>
                 <input type="number" placeholder="Quantity" id="txt" className="btn primary" onChange={()=>{
                     this.props.qtt(document.getElementById("txt").value,this.props.data)
                 }}></input>
                 <button>Update Qtt</button>
                 
                 <button onClick={()=>{
                     this.props.print(this.props.data);
                 }}>Add to cart</button>
             </div>
        );
                }

}