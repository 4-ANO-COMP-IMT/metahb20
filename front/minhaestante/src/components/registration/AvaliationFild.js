import React, { useState } from "react";

const AvaliationField = () => {
	const [rating, setRating] = useState(0);

	const handleRatingChange = (event) => {
		setRating(Math.min(Math.max(event.target.value, 0), 5));
		setRating(event.target.value);
	};

	return (
		<div>
			<label>Avaliação</label>
			<br />
			<input
				type="number"
				min="0"
				max="5"
				value={rating}
				onChange={handleRatingChange}
			/>
		</div>
	);
};

export default AvaliationField;
