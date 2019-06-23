import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import AddCourse from "./components/addCourse";
import Details from "./components/deatils"

ReactDOM.render(
  <BrowserRouter>
    <nav className="navbar navbar-light bg-light">
      <NavLink activeStyle={{ color: "red" }} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} exact to="/add">
        Add Course
      </NavLink>
      <NavLink activeStyle={{ color: "red" }} exact to="/details/:id">
        Details
      </NavLink>
    </nav>

    <Route path="/" exact component={App} />
    <Route path="/add" exact component={AddCourse} />
    <Route path="/details/:id" exact render={
        ({match})=>{
            return(<Details selectedCourseId={match.params.id}></Details>)
        }
    } />

  </BrowserRouter>,
  document.getElementById("root")
);
