import { describe, test, expect } from "vitest";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { createBookPresenter } from "../../../src/modules/createBook/createBookPresenter.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for createBookPresenter", () => {
  test("Should return a HttpResponse with statusCode 201", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({
      title: "Title",
      edition: 1,
      autor: "Autor",
      pages: 200,
      genre: "HQ",
      publishDate: -649029540000,
      publisher: "Publisher",
      rating: 5,
    });
    const response = await createBookPresenter(event, repo);

    expect(response.statusCode).toEqual(201);
    expect(response.body["message"]).toEqual("the book was created");
    expect(response.body["book"]["title"]).toEqual("Title");
    expect(response.body["book"]["edition"]).toEqual(1);
    expect(response.body["book"]["autor"]).toEqual("Autor");
    expect(response.body["book"]["pages"]).toEqual(200);
    expect(response.body["book"]["genre"]).toEqual("HQ");
    expect(response.body["book"]["publishDate"]).toEqual(-649029540000);
    expect(response.body["book"]["publisher"]).toEqual("Publisher");
    expect(response.body["book"]["rating"]).toEqual(5);
  });

  test("Should return a HttpResponse with statusCode 400", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({
      title: 1,
      edition: 1,
      autor: "Autor",
      pages: 200,
      genre: "HQ",
      publishDate: -649029540000,
      publisher: "Publisher",
      rating: 5,
    });
    const response = await createBookPresenter(event, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field title isn't in the right type.\n Received: number.\n Expected: string"
    );
  });
});
