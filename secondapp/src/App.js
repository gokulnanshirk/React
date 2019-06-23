import React from "react";
import Courses from "./components/courses";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          id: 1,
          title: "React",
          price: "12000",
          duration: "15 HRS",
          selected: false
        },
        {
          id: 2,
          title: "Angular",
          price: "12000",
          duration: "15 HRS",
          selected: false
        },
        {
          id: 3,
          title: "Ionic",
          price: "12000",
          duration: "15 HRS",
          selected: false
        },
        {
          id: 4,
          title: "JavaScript",
          price: "12000",
          duration: "15 HRS",
          selected: false
        },
        {
          id: 5,
          title: "TypeScript",
          price: "12000",
          duration: "15 HRS",
          selected: false
        }
      ]
    };

    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(data) { 
    console.log(data.id);
    this.setState({
      courses:this.state.courses.map(course=>{
        console.log(' course selected ', data.id);
        if(course.id === data.id){
          course.selected = !course.selected 
         }
         return course;
      }
      )
    });
    console.log(this.state.courses)
  }

  render() {
    console.log('inside the render method ....',this.state.courses);
    return (
      <div className="container fluid">
        <div className="row">
          <Courses data={this.state.courses} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
