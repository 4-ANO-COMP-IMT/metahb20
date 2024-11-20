import { describe, test, expect } from "vitest";
import { updateBookshelfPresenter } from "../../../src/modules/updateBookshelf/updateBookshelfPresenter.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for UpdateBookshelf Presenter", () => {
  test("Test updateBookshelfPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "46bf72c5-dec3-58c6-89da-6538628d4acb",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      reading: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      willRead: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      reReading: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      dropped: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      favorites: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await updateBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was updated");
  });

  test("Test updateBookshelfPresenter only 1 parameter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      userID: "46bf72c5-dec3-58c6-89da-6538628d4acb",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await updateBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was updated");
  });

  test("Test updateBookshelfPresenter missing userID", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await updateBookshelfPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });
});
