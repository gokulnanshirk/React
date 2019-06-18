import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";






ReactDOM.render(
  <div>
    <Header />
    <Main  />
    <Footer />
  </div>,
  document.getElementById("root")
);
