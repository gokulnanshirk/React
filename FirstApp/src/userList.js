import React from "react";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

export function UserList(props) {

 

  const data = props.data;
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} qtt={props.qtt} print={props.print} />
      <CardFooter data={data} />
    </div>
  );
}
