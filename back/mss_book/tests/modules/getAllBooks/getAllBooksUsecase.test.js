import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for GetAllBooks Usecase", () => {
  test("Test getAllBooks", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const books = await bookRepositoryMock.getAllBooks();
    expect(books).toHaveLength(4);
  });
});
