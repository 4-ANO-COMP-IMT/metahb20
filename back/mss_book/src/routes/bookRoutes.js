import express from "express";
import { getBookPresenter } from "../modules/getBook/getBookPresenter.js";
import { HttpRequest } from "../shared/helpers/externalInterfaces/httpModels.js";

const routes = express.Router();

routes.get("/book/:bookId", async (req, res) => {
  const request = new HttpRequest({
    bookId: req.params.bookId,
  });

  const response = await getBookPresenter(request);

  res.status(response.statusCode).send(response.body);
});

export default routes;
