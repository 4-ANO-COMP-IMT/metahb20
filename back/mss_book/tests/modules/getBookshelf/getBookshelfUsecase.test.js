import { describe, test, expect } from "vitest";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { GetBookshelfUsecase } from "../../../src/modules/getBookshelf/getBookshelfUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for GetBookshelfUsecase", () => {
  const repo = new BookRepositoryMock();

  test("Test getBookshelf", async () => {
    const usecase = new GetBookshelfUsecase(repo);
    const bookshelf = await usecase.call(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(bookshelf).toBeInstanceOf(Bookshelf);
  });

  test("Test getBookshelf with invalid userID", async () => {
    const usecase = new GetBookshelfUsecase(repo);
    await expect(usecase.call("3")).rejects.toThrowError(
      "Field userID is not valid"
    );
  });

  test("Test getBookshelf NoItemsFound", async () => {
    const usecase = new GetBookshelfUsecase(repo);
    await expect(
      usecase.call("6736790e-61f4-58d6-a80c-00937f3e49cc")
    ).rejects.toThrowError("No items found for userID");
  });
});
