import { describe, test, expect } from "vitest";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";
import { GetBookController } from "../../../src/modules/getBook/getBookController.js";
import { GetBookUsecase } from "../../../src/modules/getBook/getBookUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("GetBookCOntroller Tests", () => {
  test("Test GetBookController", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookUsecase(repo);
    const controller = new GetBookController(usecase);

    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(200);
    expect(response.body["book"]["title"]).toEqual("1984");
    expect(response.body["book"]["edition"]).toEqual(1);
    expect(response.body["book"]["autor"]).toEqual("George Orwell");
    expect(response.body["book"]["pages"]).toEqual(200);
    expect(response.body["book"]["genre"]).toEqual(GENRES.FICCAO);
    expect(response.body["book"]["publishDate"]).toEqual(-649029540000);

    expect(response.body["book"]["publisher"]).toEqual("Secker and Warburg");
    expect(response.body["book"]["rating"]).toEqual(5);
  });

  test("Test GetBookController missing bookId", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookUsecase(repo);
    const controller = new GetBookController(usecase);

    const request = new HttpRequest({});

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is missing");
  });

  test("Test GetBookController invalid bookId", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookUsecase(repo);
    const controller = new GetBookController(usecase);

    const request = new HttpRequest({
      bookId: "3",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is not valid");
  });

  test("Test GetBookController NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new GetBookUsecase(repo);
    const controller = new GetBookController(usecase);

    const request = new HttpRequest({
      bookId: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await controller.call(request);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for bookId");
  });
});
