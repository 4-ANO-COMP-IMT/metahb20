import { describe, test, expect } from "vitest";
import { UpdateBookController } from "../../../src/modules/updateBook/updateBookController.js";
import { UpdateBookUsecase } from "../../../src/modules/updateBook/updateBookUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for UpdateBookController", () => {
  test("Test updateBook Controller", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookUsecase(repo);
    const controller = new UpdateBookController(usecase);

    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
      title: "Novo Título",
      edition: 2,
      autor: "Novo Autor",
      pages: 100,
      genre: "ROMANCE",
      publishDate: -843858427000,
      publisher: "Reynal & Hitchcock",
      rating: 4,
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(200);
    expect(response.body["book"]["title"]).toEqual("Novo Título");
    expect(response.body["book"]["edition"]).toEqual(2);
    expect(response.body["book"]["autor"]).toEqual("Novo Autor");
    expect(response.body["book"]["pages"]).toEqual(100);
    expect(response.body["book"]["genre"]).toEqual("Romance");
    expect(response.body["book"]["publishDate"]).toEqual(-843858427000);
    expect(response.body["book"]["publisher"]).toEqual("Reynal & Hitchcock");
    expect(response.body["book"]["rating"]).toEqual(4);
    expect(response.body["message"]).toEqual("the book was updated");
  });

  test("Test updateBookController only 1 parameter", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookUsecase(repo);
    const controller = new UpdateBookController(usecase);

    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
      title: "Aula do Bossini",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the book was updated");
    expect(response.body["book"]["title"]).toEqual("Aula do Bossini");
  });

  test("Test updateBookController missing bookId", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookUsecase(repo);
    const controller = new UpdateBookController(usecase);

    const request = new HttpRequest({
      title: "Aula do Bossini",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookID is missing");
  });

  test("Test updateBookController invalid bookId", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookUsecase(repo);
    const controller = new UpdateBookController(usecase);

    const request = new HttpRequest({
      bookId: "3",
      title: "Aula do Bossini",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is not valid");
  });

  test("Test UpdateBookController NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookUsecase(repo);
    const controller = new UpdateBookController(usecase);

    const request = new HttpRequest({
      bookId: "6736790e-61f4-58d6-a80c-00937f3e49cc",
      title: "Aula do Bossini",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual(
      "No items found for 6736790e-61f4-58d6-a80c-00937f3e49cc"
    );
  });
});
