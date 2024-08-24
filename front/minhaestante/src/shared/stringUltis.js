export const convertToTimestamp = (dateString) => {
	const [day, month, year] = dateString.split("/").map(Number);
	const date = new Date(year, month - 1, day);
	return date.getTime();
};

export const convertToDateString = (timestamp) => {
	const date = new Date(timestamp);
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
};
