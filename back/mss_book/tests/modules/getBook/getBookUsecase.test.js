import { describe, test, expect } from "vitest";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { GetBookUsecase } from "../../../src/modules/getBook/getBookUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

const repo = new BookRepositoryMock();

describe("Tests for GetBookUsecase", () => {
  test("Test getBook", async () => {
    const usecase = new GetBookUsecase(repo);
    const book = await usecase.call("367f3e10-4649-5e8e-acc6-4669644a520e");
    expect(book).toBeInstanceOf(Book);
  });

  test("Test getBook with invalid bookId", async () => {
    const usecase = new GetBookUsecase(repo);
    await expect(usecase.call("3")).rejects.toThrowError(
      "Field bookId is not valid"
    );
  });

  test("Test getBook NoItemsFound", async () => {
    const usecase = new GetBookUsecase(repo);
    await expect(
      usecase.call("6736790e-61f4-58d6-a80c-00937f3e49cc")
    ).rejects.toThrowError("No items found for bookId");
  });
});
