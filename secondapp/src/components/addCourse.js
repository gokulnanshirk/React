import React from "react";
import axios from "axios";

class AddCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "",
      coursePrice: "",
      courseDuration: "",
      invalidCourseName: "",
      invalidCoursePrice: "",
      invalidCourseDuration: "",
      formValid: true
    };
    this.handleCourseName = this.handleCourseName.bind(this);
    this.handleCoursePrice = this.handleCoursePrice.bind(this);
    this.handleCoursePrice = this.handleCoursePrice.bind(this);
  }
  handleCourseName(ev) {
    this.setState({
      courseName: ev.target.value
    });
    if (ev.target.value.length > 10) {
      this.setState({
        invalidCourseName: "Course Name must not go beyond 10 chars",
        formValid: false
      });
    } else {
      this.setState({
        invalidCourseName: ""
      });
    }
  }
  handleCoursePrice(ev) {
    this.setState({
      coursePrice: ev.target.value
    });
    if (ev.target.value > 10000) {
      this.setState({
        invalidCoursePrice: "Course Price must not go beyond 10000",
        formValid: false
      });
    } else {
      this.setState({
        invalidCoursePrice: ""
      });
    }
  }
  handleCourseDuration(ev) {
    this.setState({
      courseDuration: ev.target.value
    });
    if (ev.target.value > 100) {
      this.setState({
        invalidCourseDuration: "Course Price must not go beyond 10000",
        formValid: false
      });
    } else {
      this.setState({
        invalidCourseDuration: ""
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let newCourse = {
      id:this.props.courses.length+1,
      title: event.target.name.value,
      price: event.target.price.value,
      duration: event.target.duration.value,
      selected:false
    };
    this.props.addCourse(newCourse);
    this.props.history.push('/');
    
  }
  render() {
    return (
      <div className="container">
        <form
          onSubmit={event => {
            this.handleSubmit(event);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.courseName}
              onChange={event => this.handleCourseName(event)}
              name="name"
              id=""
              aria-describedby="helpId"
              placeholder="Course Name"
            />
          </div>
          <div>{this.state.invalidCourseName}</div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              value={this.state.coursePrice}
              onChange={event => this.handleCoursePrice(event)}
              name="price"
              id=""
              aria-describedby="helpId"
              placeholder="Course Cost"
            />
          </div>
          <div>{this.state.invalidCoursePrice}</div>

          <div className="form-group">
            <input
              type="number"
              className="form-control"
              value={this.state.courseDuration}
              onChange={event => this.handleCourseDuration(event)}
              name="duration"
              id=""
              aria-describedby="helpId"
              placeholder="Course Duration"
            />
          </div>
          <div>{this.state.invalidCourseDuration}</div>

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddCourse;
