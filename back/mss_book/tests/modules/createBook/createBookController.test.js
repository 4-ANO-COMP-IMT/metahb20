import { describe, test, expect } from "vitest";
import { CreateBookController } from "../../../src/modules/createBook/createBookController.js";
import { CreateBookUsecase } from "../../../src/modules/createBook/createBookUsecase.js";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { response } from "express";

describe("Tests for CreateBookController", () => {
  test("Test createBook", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const controller = new CreateBookController(usecase);

    const request = new HttpRequest({
      title: "The Hobbit",
      edition: 1,
      autor: "J.R.R. Tolkien",
      pages: 310,
      genre: "Crônica",
      publishDate: -1023957422000,
      publisher: "George Allen & Unwin",
      rating: 5,
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(201);
    expect(response.body["book"]["title"]).toEqual("The Hobbit");
    expect(response.body["book"]["edition"]).toEqual(1);
    expect(response.body["book"]["autor"]).toEqual("J.R.R. Tolkien");
    expect(response.body["book"]["pages"]).toEqual(310);
    expect(response.body["book"]["genre"]).toEqual("Crônica");
    expect(response.body["book"]["publishDate"]).toEqual(-1023957422000);
    expect(response.body["book"]["publisher"]).toEqual("George Allen & Unwin");
    expect(response.body["book"]["rating"]).toEqual(5);
  });

  test("Test createBook with wrong type title", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const controller = new CreateBookController(usecase);

    const request = new HttpRequest({
      title: 1,
      edition: 1,
      autor: "J.R.R. Tolkien",
      pages: 310,
      genre: "Crônica",
      publishDate: -1023957422000,
      publisher: "George Allen & Unwin",
      rating: 5,
    });
    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field title isn't in the right type.\n Received: number.\n Expected: string"
    );
  });

  test("Test createBook with wrong type edition", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const controller = new CreateBookController(usecase);

    const request = new HttpRequest({
      title: "The Hobbit",
      edition: "1",
      autor: "J.R.R. Tolkien",
      pages: 310,
      genre: "Crônica",
      publishDate: -1023957422000,
      publisher: "George Allen & Unwin",
      rating: 5,
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field edition isn't in the right type.\n Received: string.\n Expected: number"
    );
  });

  test("Test createBook missing title", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const controller = new CreateBookController(usecase);

    const request = new HttpRequest({
      edition: 1,
      autor: "J.R.R. Tolkien",
      pages: 310,
      genre: "Crônica",
      publishDate: -1023957422000,
      publisher: "George Allen & Unwin",
      rating: 5,
    });
    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field title is missing");
  });

  test("Test createBook invalid title", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const controller = new CreateBookController(usecase);

    const request = new HttpRequest({
      title: "",
      edition: 1,
      autor: "J.R.R. Tolkien",
      pages: 310,
      genre: "Crônica",
      publishDate: -1023957422000,
      publisher: "George Allen & Unwin",
      rating: 5,
    });
    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field title is not valid");
  });
});
