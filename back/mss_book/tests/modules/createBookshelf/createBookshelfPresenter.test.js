import { describe, test, expect } from "vitest";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { createBookshelfPresenter } from "../../../src/modules/createBookshelf/createBookshelfPresenter.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for createBookshelfPresenter", () => {
  test("Should return a HttpResponse with statusCode 201", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({
      userID: "51cf5837-26e8-5bde-8bf9-ff62ad1ca2d7",
    });
    const response = await createBookshelfPresenter(event, repo);

    expect(response.statusCode).toEqual(201);
    expect(response.body["message"]).toEqual("the bookshelf was created");
    expect(response.body["bookshelf"]["userID"]).toEqual(
      "51cf5837-26e8-5bde-8bf9-ff62ad1ca2d7"
    );
  });

  test("Should return a HttpResponse with statusCode 400", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({
      userID: 1,
    });
    const response = await createBookshelfPresenter(event, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field userID isn't in the right type.\n Received: number.\n Expected: string"
    );
  });

  test("Should return a HttpResponse with statusCode 400", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({});
    const response = await createBookshelfPresenter(event, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Should return a HttpResponse with statusCode 400", async () => {
    const repo = new BookRepositoryMock();
    const event = new HttpRequest({
      userID: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    });
    const response = await createBookshelfPresenter(event, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("The item already exists for this UserID");
  });
});
