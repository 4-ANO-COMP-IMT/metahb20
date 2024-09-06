import React from "react";

const SelectField = (props) => {
	return (
		<div className="form-group">
			<label>{props.label}</label>
			<select
				className="form-control"
				value={props.value}
				onChange={props.onChange}
			>
				<option value="">{props.defaultOption || "Selecione..."}</option>
				{props.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectField;
