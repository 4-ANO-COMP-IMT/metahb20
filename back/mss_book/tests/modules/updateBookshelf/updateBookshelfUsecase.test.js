import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { UpdateBookshelfUsecase } from "../../../src/modules/updateBookshelf/updateBookshelfUsecase.js";
import { Bookshelf } from "../../../src/shared/domain/entities/bookshelf.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../../src/shared/helpers/errors/usecaseErrors.js";

describe("UpdateBookshelfUsecase Tests", () => {
  test("Should update a bookshelf with new values", async () => {
    const repo = new BookRepositoryMock();
    const updateBookshelfUsecase = new UpdateBookshelfUsecase(repo);

    const updatedBookshelf = await updateBookshelfUsecase.call(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      [
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "5af7d193-6723-50b5-a041-1478600bf631",
      ],
      [],
      undefined,
      undefined,
      undefined,
      undefined
    );

    expect(updatedBookshelf).toBeInstanceOf(Bookshelf);
    expect(updatedBookshelf.userID).toEqual(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(updatedBookshelf.read).toEqual([
      "367f3e10-4649-5e8e-acc6-4669644a520e",
      "5af7d193-6723-50b5-a041-1478600bf631",
    ]);
    expect(updatedBookshelf.reading).toEqual([]);
  });

  test("Should throw an error if bookshelf not found", async () => {
    const repo = new BookRepositoryMock();
    const updateBookshelfUsecase = new UpdateBookshelfUsecase(repo);

    await expect(
      updateBookshelfUsecase.call("5af7d193-6723-50b5-a041-1478600bf631", {
        read: ["5af7d193-6723-50b5-a041-1478600bf631"],
      })
    ).rejects.toThrow(NoItemsFound);
  });

  test("Should throw an error if userID is not valid", async () => {
    const repo = new BookRepositoryMock();
    const updateBookshelfUsecase = new UpdateBookshelfUsecase(repo);

    await expect(
      updateBookshelfUsecase.call("invalid-uuid", {
        read: ["5af7d193-6723-50b5-a041-1478600bf631"],
      })
    ).rejects.toThrow(EntityError);
  });

  test("Should throw an error if read list is not valid", async () => {
    const repo = new BookRepositoryMock();
    const updateBookshelfUsecase = new UpdateBookshelfUsecase(repo);

    await expect(
      updateBookshelfUsecase.call("d5135e3e-646a-55e7-a38d-9724159b7f9f", {
        read: ["invalid-id"],
      })
    ).rejects.toThrow(EntityError);
  });
});
