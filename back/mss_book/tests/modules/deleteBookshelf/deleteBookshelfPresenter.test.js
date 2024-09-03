import { describe, test, expect } from "vitest";
import { deleteBookshelfPresenter } from "../../../src/modules/deleteBookshelf/deleteBookshelfPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for DeleteBookshelf Presenter", () => {
  test("Test DeleteBookshelfPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
    });

    const response = await deleteBookshelfPresenter(request, repo);
    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was deleted");
    expect(response.body["bookshelf"]["userID"]).toEqual(
      "93bc6ada-c0d1-7054-66ab-e17414c48ae3"
    );
  });

  test("Test DeleteBookshelfPresenter missing userID", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({});

    const response = await deleteBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test DeleteBookshelfPresenter invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "3",
    });

    const response = await deleteBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is not valid");
  });

  test("Test DeleteBookshelfPresenter NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await deleteBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for UserID");
  });
});
