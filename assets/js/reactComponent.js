import React from "react";
import ReactDOM from "react-dom";
import Main from "../React/rComponent";

ReactDOM.render(<Main/>, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}