import { updateBookPresenter } from "../../../src/modules/updateBook/updateBookPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for UpdateBook Presenter", () => {
  test("Test updateBookPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
      title: "Novo Título",
      edition: 2,
      autor: "Rodrigo Bossini",
      pages: 300,
      genre: "ROMANCE",
      publishDate: 1211165573000,
      publisher: "Amulet Books",
      rating: 5,
    });

    const response = await updateBookPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the book was updated");
    expect(response.body["book"]["title"]).toEqual("Novo Título");
    expect(response.body["book"]["edition"]).toEqual(2);
    expect(response.body["book"]["autor"]).toEqual("Rodrigo Bossini");
    expect(response.body["book"]["pages"]).toEqual(300);
    expect(response.body["book"]["genre"]).toEqual("Romance");
    expect(response.body["book"]["publishDate"]).toEqual(1211165573000);
    expect(response.body["book"]["publisher"]).toEqual("Amulet Books");
    expect(response.body["book"]["rating"]).toEqual(5);
  });

  test("Test updateBookPresenter missing bookId", async () => {
    const request = new HttpRequest({
      title: "Aula do Bossini",
    });

    const response = await updateBookPresenter(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookID is missing");
  });
});
