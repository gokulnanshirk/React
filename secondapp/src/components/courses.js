import React from "react";

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    let course = (
      <div>
        {this.props.data.map(data => (
          <div key={data.id}>{data.title}</div>
        ))}
      </div>
    );
    let noCourse = (
      <div>
        <h3>No Courses Available</h3>
      </div>
    );
    if (this.props.data.length > 0) {
      return course;
    } else {
      return noCourse;
    }
  }
}

export default Courses;
