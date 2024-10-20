import { describe, test, expect } from "vitest";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { DeleteBookshelfUsecase } from "../../../src/modules/deleteBookshelf/deleteBookshelfUsecase.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../../src/shared/helpers/errors/usecaseErrors.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Tests for deleteBookshelfUsecase", () => {
  test("Test deleteBookshelf Usecase", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);
    const bookshelf = await usecase.call(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );

    expect(bookshelf).toBeInstanceOf(Bookshelf);
    expect(repo.bookshelves.length).toBe(3);
    expect(bookshelf.userID).toBe("d5135e3e-646a-55e7-a38d-9724159b7f9f");
  });

  test("Test deleteBookshelf with invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);

    await expect(usecase.call("3")).rejects.toThrowError(EntityError);
  });

  test("Test getBookshelf NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new DeleteBookshelfUsecase(repo);
    await expect(
      usecase.call("6736790e-61f4-58d6-a80c-00937f3e49cc")
    ).rejects.toThrowError(NoItemsFound);
  });
});
