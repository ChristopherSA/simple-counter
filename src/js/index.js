//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Home } from "./component/home.js";

let counter = 0;

//render your react application

setInterval(function() {
	counter++;
	ReactDOM.render(<Home time={counter} />, document.querySelector("#app"));
}, 1000);
