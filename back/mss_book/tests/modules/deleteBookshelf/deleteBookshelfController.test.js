import { describe, test, expect } from "vitest";
import { DeleteBookshelfController } from "../../../src/modules/deleteBookshelf/deleteBookshelfController.js";
import { DeleteBookshelfUsecase } from "../../../src/modules/deleteBookshelf/deleteBookshelfUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for DeleteBookshelfController", () => {
  test("Test DeleteBookshelfController", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);
    const controller = new DeleteBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(200);
    expect(response.body["bookshelf"]["userID"]).toEqual(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(response.body["message"]).toEqual("the bookshelf was deleted");
  });

  test("Test DeleteBookshelfController missing userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);
    const controller = new DeleteBookshelfController(usecase);

    const request = new HttpRequest({});
    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test DelteBookshelf Controller No Items Found", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);
    const controller = new DeleteBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "3d65bb86-d12b-5358-a7e6-5787d864ac53",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for UserID");
  });
});
