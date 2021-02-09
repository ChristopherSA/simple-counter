import React from "react";
import { Count } from "./count.js";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="p-3">
			<Count seconds={props.time} />
		</div>
	);
}

Home.propTypes = {
	time: PropTypes.number
};
