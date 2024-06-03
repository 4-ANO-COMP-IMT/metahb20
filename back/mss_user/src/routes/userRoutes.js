import express from 'express';
import { createUserPresenter } from '../modules/createUser/createUserPresenter.js';
import { getUserPresenter } from '../modules/getUser/getUserPresenter.js';
import { deleteUserPresenter } from '../modules/deleteUser/deleteUserPresenter.js';
import { HttpRequest } from '../shared/helpers/externalInterfaces/httpModels.js';

const routes = express.Router();

routes.post('/user', async (req, res) => {
	const event = new HttpRequest(req.body);
	const response = await createUserPresenter(event);
	res.status(response.statusCode).json(response.body);
});
routes.get('/user/:id', async (req, res) => {
	const event = new HttpRequest({ userId: req.params.id });
	console.log(event);
	const response = await getUserPresenter(event);
	res.status(response.statusCode).json(response.body);
});
routes.delete('/user/:id', async (req, res) => {
	const event = new HttpRequest({ userId: req.params.id });
	console.log(event);
	const response = await deleteUserPresenter(event);
	res.status(response.statusCode).json(response.body);
});

export default routes;
