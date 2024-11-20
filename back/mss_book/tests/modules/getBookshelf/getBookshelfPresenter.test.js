import { getBookshelfPresenter } from "../../../src/modules/getBookshelf/getBookshelfpresenter.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";

describe("Test getBookshelfPresenter", () => {
  test("Test getBookshelfPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    });

    const response = await getBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was retrieved");
  });

  test("Test getBookshelfPresenter missing userID", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({});

    const response = await getBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test getBookshelfPresenter invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "3",
    });

    const response = await getBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is not valid");
  });

  test("Test getBookshelfPresenter NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await getBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for userID");
  });
});
