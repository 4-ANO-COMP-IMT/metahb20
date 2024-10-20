import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InputField = (props) => {
	return (
		<div className="form-group">
			<label>{props.label}</label>
			<input
				type={props.type}
				className="form-control"
				value={props.value}
				onChange={props.onChange}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default InputField;
