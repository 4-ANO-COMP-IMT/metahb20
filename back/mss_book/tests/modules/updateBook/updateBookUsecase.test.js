import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { UpdateBookUsecase } from "../../../src/modules/updateBook/updateBookUsecase.js";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../../src/shared/helpers/errors/usecaseErrors.js";

describe("UpdateBookUsecase Tests", () => {
  test("Should update a book with new values", async () => {
    const repo = new BookRepositoryMock();
    const updateBookUsecase = new UpdateBookUsecase(repo);

    const updatedBook = await updateBookUsecase.call(
      "367f3e10-4649-5e8e-acc6-4669644a520e",
      "1984 - Updated Edition",
      undefined,
      undefined,
      250,
      undefined,
      undefined,
      undefined,
      undefined
    );

    expect(updatedBook).toBeInstanceOf(Book);
    expect(updatedBook.title).toEqual("1984 - Updated Edition");
    expect(updatedBook.pages).toEqual(250);
    expect(updatedBook.autor).toEqual("George Orwell"); // Campo não alterado
  });

  test("Should throw an error if book not found", async () => {
    const repo = new BookRepositoryMock();
    const updateBookUsecase = new UpdateBookUsecase(repo);

    await expect(
      updateBookUsecase.call("5af7d193-6723-50b5-a041-1478600bf631", {
        title: "Not Found",
      })
    ).rejects.toThrow(NoItemsFound);
  });

  test("Should not update any field if no data provided", async () => {
    const repo = new BookRepositoryMock();
    const updateBookUsecase = new UpdateBookUsecase(repo);

    const originalBook = await repo.getBook(
      "367f3e10-4649-5e8e-acc6-4669644a520e"
    );
    const updatedBook = await updateBookUsecase.call(
      "367f3e10-4649-5e8e-acc6-4669644a520e",
      {}
    );

    expect(updatedBook).toEqual(originalBook); // Deve ser idêntico ao original
  });

  test("Should throw an error if bookId is not valid", async () => {
    const repo = new BookRepositoryMock();
    const updateBookUsecase = new UpdateBookUsecase(repo);

    await expect(
      updateBookUsecase.call(5, { title: "not valid" })
    ).rejects.toThrow(EntityError);
  });
});
