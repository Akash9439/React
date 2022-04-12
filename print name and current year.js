import React from "react";
import ReactDOM from "react-dom";

const name = "Akash";
const currentDate=new Date();
const year=currentDate.getFullYear();


ReactDOM.render(
  <div>
    <h1>Created By {name}</h1>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
