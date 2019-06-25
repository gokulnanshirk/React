import React from "react";
import Details from './deatils'
import { BrowserRouter, Route, NavLink } from "react-router-dom";


class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.btnClass = this.btnClass.bind(this);

    this.state = {
      data: this.props.data
    };
console.log("courses js constructor")
    this.btnClass = this.btnClass.bind(this);
  }

  render() {
    let course = (
      <div className="container fluid">
        <div className="card">
          {this.props.courses.map(data => (
            <div key={data.id} className="card-header">
              {data.id}
              <div className="card-body" key={data.id}>
                Title: {data.title}
                <br />
                Price: {data.price}
                <br />
                Duration: {data.duration}
                <br />
              </div>
              <button className="btn btn-danger" onClick={()=>{this.props.removeCourse(data)}}>Remove</button>
              <NavLink className="btn btn-success" exact to={`/details/${data.id}`}>More Details</NavLink>
            </div>
          ))}
        </div>
      </div>
    );
    let noCourse = (
      <div>
        <h3>No Courses Available</h3>
      </div>
    );
    if (this.props.courses.length > 0) {
      return course;
    } else {
      return noCourse;
    }
  }

  btnClass(data) {
    if (data.selected) {
      return "btn btn-primary";
    } else return "";
  }
}

export default Courses;
