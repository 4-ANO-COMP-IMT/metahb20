import React from "react";
import { useParams } from "react-router-dom";
import RowBookshelfComponent from "../components/bookshelf/RowBookshelf";
import { render } from "@testing-library/react";
import UpdateForm from "../components/user/Update";

const UserUpdatePage = () => {
	const { userId } = useParams();

	return (
		<div>
			<UpdateForm userId={userId} />
		</div>
	);
};

export default UserUpdatePage;
