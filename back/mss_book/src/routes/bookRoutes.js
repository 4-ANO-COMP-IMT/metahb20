import express from "express";
import { getBookPresenter } from "../modules/getBook/getBookPresenter.js";
import { HttpRequest } from "../shared/helpers/externalInterfaces/httpModels.js";
import { createBookPresenter } from "../modules/createBook/createBookPresenter.js";
import { updateBookPresenter } from "../modules/updateBook/updateBookPresenter.js";

const routes = express.Router();

routes.get("/book/:bookId", async (req, res) => {
  const request = new HttpRequest({
    bookId: req.params.bookId,
  });

  const response = await getBookPresenter(request);

  res.status(response.statusCode).send(response.body);
});

routes.post("/book", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await createBookPresenter(request);

  res.status(response.statusCode).send(response.body);
});

routes.put("/book", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await updateBookPresenter(request);

  res.status(response.statusCode).send(response.body);
});

export default routes;
