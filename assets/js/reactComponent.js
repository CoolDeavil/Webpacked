import React from "react";
import ReactDOM from "react-dom";

// import Main from "../React/rComponent";
import App from "../React/app";

// ReactDOM.render(<Main/>, document.getElementById('app'));
ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}