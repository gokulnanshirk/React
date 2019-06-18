import React from "react";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

export function UserList(props) {

 

  
  return (
    <div className="card">
      <CardHeader data={props.data} />
      <CardBody data={props.data} setCounter={props.setCounter} print={props.print} />
      <CardFooter data={props.data} />
    </div>
  );
}
