import { describe, test, expect } from "vitest";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { GetBookshelfUsecase } from "../../../src/modules/getBookshelf/getBookshelfUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { GetBookshelfController } from "../../../src/modules/getBookshelf/getBooksheflfController.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("GetBookshelfController Tests", () => {
  test("Test GetBookshelfController", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookshelfUsecase(repo);
    const controller = new GetBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(200);
    expect(response.body["message"]).toEqual("the bookshelf was retrieved");
  });

  test("Test GetBookshelfController missing userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookshelfUsecase(repo);
    const controller = new GetBookshelfController(usecase);

    const request = new HttpRequest({});

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test GetBookshelfController invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookshelfUsecase(repo);
    const controller = new GetBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "3",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is not valid");
  });

  test("Test GetBookshelfController NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookshelfUsecase(repo);
    const controller = new GetBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for userID");
  });
});
