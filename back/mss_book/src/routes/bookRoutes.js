import express from "express";
import { BookRepositoryMock } from "../shared/infra/repositories/bookRepositoryMock.js";
import { getBookPresenter } from "../modules/getBook/getBookPresenter.js";
import { HttpRequest } from "../shared/helpers/externalInterfaces/httpModels.js";
import { createBookPresenter } from "../modules/createBook/createBookPresenter.js";
import { updateBookPresenter } from "../modules/updateBook/updateBookPresenter.js";
import { deleteBookPresenter } from "../modules/deleteBook/deleteBookPresenter.js";
import { getAllBooksPresenter } from "../modules/getAllBooks/getAllBooksPresenter.js";
import { getBookshelfPresenter } from "../modules/getBookshelf/getBookshelfpresenter.js";
import { createBookshelfPresenter } from "../modules/createBookshelf/createBookshelfPresenter.js";
import { deleteBookshelfPresenter } from "../modules/deleteBookshelf/deleteBookshelfPresenter.js";
import { updateBookshelfPresenter } from "../modules/updateBookshelf/updateBookshelfPresenter.js";

const routes = express.Router();
const repo = new BookRepositoryMock();

routes.get("/book/:bookId", async (req, res) => {
  const request = new HttpRequest({
    bookId: req.params.bookId,
  });

  const response = await getBookPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.post("/bookshelf", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await createBookshelfPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.post("/book", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await createBookPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.put("/book", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await updateBookPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.put("/bookshelf", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await updateBookshelfPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.delete("/book", async (req, res) => {
  const request = new HttpRequest(req.body);
  const response = await deleteBookPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.delete("/bookshelf/:userID", async (req, res) => {
  const request = new HttpRequest({ userID: req.params.userID });
  const response = await deleteBookshelfPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.get("/books", async (req, res) => {
  const request = new HttpRequest({});
  const response = await getAllBooksPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

routes.get("/bookshelf/:userID", async (req, res) => {
  const request = new HttpRequest({
    userID: req.params.userID,
  });

  const response = await getBookshelfPresenter(request, repo);

  res.status(response.statusCode).send(response.body);
});

export default routes;
