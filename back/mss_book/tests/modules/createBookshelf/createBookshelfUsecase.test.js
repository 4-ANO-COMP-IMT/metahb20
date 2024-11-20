import { describe, test, expect } from "vitest";
import { CreateBookshelfUsecase } from "../../../src/modules/createBookshelf/createBookshelfUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";

describe("Test for CreateBookshelfUsecase", () => {
  test("Test createBookshelfUsecase", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    const newBookshelf = await usecase.call(
      "66d7861f-1c40-5750-aa6f-5fbeba43c636"
    );

    expect(newBookshelf).toBeInstanceOf(Bookshelf);
    expect(newBookshelf.userID).toEqual("66d7861f-1c40-5750-aa6f-5fbeba43c636");
  });

  test("Test createBookshelfUsecase invalid userID", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    await expect(usecase.call("12")).rejects.toThrowError(EntityError);
  });

  test("Test createBookshelfUsecase Duplicated Item", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookshelfUsecase(repo);
    await expect(
      usecase.call("d5135e3e-646a-55e7-a38d-9724159b7f9f")
    ).rejects.toThrowError("The item already exists for this UserID");
  });
});
