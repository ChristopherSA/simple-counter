import React from "react";
import PropTypes from "prop-types";

export function Count(props) {
	let counter6 = Math.floor(props.seconds / 100000) + "";
	let counter5 = Math.floor(props.seconds / 10000) + "";
	let counter4 = Math.floor(props.seconds / 1000) + "";
	let counter3 = Math.floor(props.seconds / 100) + "";
	let counter2 = Math.floor(props.seconds / 10) + "";
	let counter1 = Math.floor(props.seconds / 1) + "";

	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{counter6.charAt(counter6.length - 1)}</div>
			<div className="five">{counter5.charAt(counter5.length - 1)}</div>
			<div className="four">{counter4.charAt(counter4.length - 1)}</div>
			<div className="three">{counter3.charAt(counter3.length - 1)}</div>
			<div className="two">{counter2.charAt(counter2.length - 1)}</div>
			<div className="one">{counter1.charAt(counter1.length - 1)}</div>
		</div>
	);
}

Count.propTypes = {
	seconds: PropTypes.number
};
