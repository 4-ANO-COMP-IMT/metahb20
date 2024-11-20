import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { GetAllBooksUsecase } from "../../../src/modules/getAllBooks/getAllBooksUsecase.js";
import { GetAllBooksController } from "../../../src/modules/getAllBooks/getAllBooksController.js";

describe("Tests for GetAllBooksController", () => {
  test("Test call", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const getAllBooksUsecase = new GetAllBooksUsecase(bookRepositoryMock);
    const getAllBooksController = new GetAllBooksController(getAllBooksUsecase);
    const response = await getAllBooksController.call();
    expect(response.statusCode).toEqual(200);
    expect(response.body["books"]).toHaveLength(
      bookRepositoryMock.books.length
    );
    expect(response.body["message"]).toEqual("all books were retrieved");
  });
});