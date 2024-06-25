import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SucessMessage = (props) => {
	return (
		<div className="alert alert-success" role="alert">
			{props.message}
		</div>
	);
};

export default SucessMessage;
