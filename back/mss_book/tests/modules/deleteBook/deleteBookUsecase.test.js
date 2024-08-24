import { describe, test, expect } from "vitest";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { DeleteBookUsecase } from "../../../src/modules/deleteBook/deleteBookUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for deleteBookUsecase", () => {
  test("Test delteBook Usecase", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookUsecase(repo);
    const book = await usecase.call("367f3e10-4649-5e8e-acc6-4669644a520e");

    expect(book).toBeInstanceOf(Book);
    expect(repo.books.length).toBe(3);
    expect(book.title).toBe("1984");
  });

  test("Test deleteBook with invalid bookId", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookUsecase(repo);

    await expect(usecase.call("3")).rejects.toThrowError(
      "Field bookId is not valid"
    );
  });

  test("Test getBook NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookUsecase(repo);
    await expect(
      usecase.call("6736790e-61f4-58d6-a80c-00937f3e49cc")
    ).rejects.toThrowError("No items found for bookId");
  });
});
