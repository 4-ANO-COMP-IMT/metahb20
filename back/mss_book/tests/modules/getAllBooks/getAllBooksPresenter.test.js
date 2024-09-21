import { describe, test, expect } from "vitest";
import { getAllBooksPresenter } from "../../../src/modules/getAllBooks/getAllBooksPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Test getAllBooksPresenter", () => {
  test("Test getAllBooksPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({});

    const response = await getAllBooksPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("all books were retrieved");
  });
});