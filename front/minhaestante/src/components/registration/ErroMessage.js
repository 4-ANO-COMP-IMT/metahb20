import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorMessage = (props) => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.message}
		</div>
	);
};

export default ErrorMessage;
