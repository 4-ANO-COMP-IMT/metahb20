import express from "express";
import { createUserPresenter } from "../modules/createUser/createUserPresenter.js";
import { HttpRequest } from "../shared/helpers/externalInterfaces/httpModels.js";

const routes = express.Router();

routes.post("/user", async (req, res) => {
  const event = new HttpRequest(req.body);
  const response = await createUserPresenter(event);
  res.status(response.statusCode).json(response.body);
});

export default routes;
