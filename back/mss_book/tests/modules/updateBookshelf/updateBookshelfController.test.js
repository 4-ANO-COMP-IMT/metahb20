import { describe, test, expect } from "vitest";
import { UpdateBookshelfController } from "../../../src/modules/updateBookshelf/updateBookshelfController.js";
import { UpdateBookshelfUsecase } from "../../../src/modules/updateBookshelf/updateBookshelfUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for UpdateBookshelfController", () => {
  test("Test updateBookshelf Controller", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "46bf72c5-dec3-58c6-89da-6538628d4acb",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      reading: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      willRead: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      reReading: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      dropped: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
      favorites: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was updated");
  });

  test("Test updateBookshelfController only 1 parameter", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "46bf72c5-dec3-58c6-89da-6538628d4acb",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was updated");
  });

  test("Test updateBookshelfController missing userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test updateBookshelfController not a list", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "46bf72c5-dec3-58c6-89da-6538628d4acb",
      read: "367f3e10-4649-5e8e-acc6-4669644a520e",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field read isn't in the right type.\n Received: string.\n Expected: array"
    );
  });

  test("Test updateBookshelfController invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "3",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is not valid");
  });

  test("Test UpdateBookshelfController NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new UpdateBookshelfUsecase(repo);
    const controller = new UpdateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "6736790e-61f4-58d6-a80c-00937f3e49cc",
      read: ["367f3e10-4649-5e8e-acc6-4669644a520e"],
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual(
      "No items found for 6736790e-61f4-58d6-a80c-00937f3e49cc"
    );
  });
});
