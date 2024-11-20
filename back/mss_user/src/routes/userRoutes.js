import express from "express";
import { createUserPresenter } from "../modules/createUser/createUserPresenter.js";
import { getUserPresenter } from "../modules/getUser/getUserPresenter.js";
import { deleteUserPresenter } from "../modules/deleteUser/deleteUserPresenter.js";
import { HttpRequest } from "../shared/helpers/externalInterfaces/httpModels.js";
import { updateUserPresenter } from "../modules/updateUser/updateUserPresenter.js";
import { UserRepositoryMock } from "../shared/infra/repositories/userRepositoryMock.js";

const routes = express.Router();
const repo = new UserRepositoryMock();

routes.post("/user", async (req, res) => {
  const event = new HttpRequest(req.body);
  const response = await createUserPresenter(event, repo);
  res.status(response.statusCode).json(response.body);
});
routes.get("/user/:id", async (req, res) => {
  const event = new HttpRequest({ userId: req.params.id });
  const response = await getUserPresenter(event, repo);
  res.status(response.statusCode).json(response.body);
});
routes.delete("/user/:id", async (req, res) => {
  const event = new HttpRequest({ userId: req.params.id });
  const response = await deleteUserPresenter(event, repo);
  res.status(response.statusCode).json(response.body);
});

routes.put("/user", async (req, res) => {
  const event = new HttpRequest(req.body);
  const response = await updateUserPresenter(event, repo);
  res.status(response.statusCode).json(response.body);
});

export default routes;
