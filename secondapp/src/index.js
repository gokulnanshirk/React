import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import AddCourse from "./components/addCourse";
import Details from "./components/deatils";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import {WrapperAddCourse} from "./components/WrapperComponent"

const store = createStore(rootReducer);
console.log(store)
ReactDOM.render(
  <Provider store={store}>
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
      <Route path="/add" exact component={WrapperAddCourse} />
      <Route
        path="/details/:id"
        exact
        render={({ match }) => {
          return <Details selectedCourseId={match.params.id} />;
        }}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
