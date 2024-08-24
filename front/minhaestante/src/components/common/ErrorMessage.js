import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorMessage = (props) => {
	return (
		<div className="alert alert-danger m-2" role="alert">
			{props.message}
		</div>
	);
};

export default ErrorMessage;
