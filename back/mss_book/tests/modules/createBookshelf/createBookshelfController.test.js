import { describe, test, expect } from "vitest";
import { CreateBookshelfController } from "../../../src/modules/createBookshelf/createBookshelfController.js";
import { CreateBookshelfUsecase } from "../../../src/modules/createBookshelf/createBookshelfUsecase.js";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for CreateBookshelfController", () => {
  test("Test createBookshelf", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    const controller = new CreateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "d2602b5f-8de7-593d-ba4d-68b772f31f81",
    });

    const response = await controller.call(request);
    expect(response.statusCode).toEqual(201);
    expect(response.body["bookshelf"]["userID"]).toEqual(
      "d2602b5f-8de7-593d-ba4d-68b772f31f81"
    );
    expect(response.body["message"]).toEqual("the bookshelf was created");
  });

  test("Test createBookshelf with wrong type userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    const controller = new CreateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: 1,
    });
    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      "Field userID isn't in the right type.\n Received: number.\n Expected: string"
    );
  });

  test("Test createBookshelf with missing userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    const controller = new CreateBookshelfController(usecase);

    const request = new HttpRequest({});
    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field userID is missing");
  });

  test("Test createBookshelfUsecase DuplicatedItem", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    const controller = new CreateBookshelfController(usecase);

    const request = new HttpRequest({
      userID: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    });
    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("The item already exists for this UserID");
  });
});
