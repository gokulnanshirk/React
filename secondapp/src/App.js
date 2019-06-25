import React from "react";
import Courses from "./components/courses";
import {WrapperCourse} from './components/WrapperComponent';
import {WrapperDummy} from './components/WrapperComponent';


class App extends React.Component {
  
   
  render() {
    return (
      <div className="container fluid">
        <div className="row">
          <WrapperCourse></WrapperCourse>
          <WrapperDummy></WrapperDummy>
        </div>
      </div>
    );
  }
}




export default App;
