import { describe, test, expect } from "vitest";
import { CreateBookUsecase } from "../../../src/modules/createBook/createBookUsecase.js";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { Book } from "../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../src/shared/helpers/errors/domainErrors.js";

describe("Test for CreateBookUsecase", () => {
  test("Test createBookUsecase", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    const newBook = await usecase.call(
      "O Alienista",
      2,
      "Machado de Assis",
      150,
      GENRES.CONTO,
      1882,
      "penguim",
      4
    );

    expect(newBook).toBeInstanceOf(Book);
    expect(newBook.title).toEqual("O Alienista");
  });

  test("Test createBookUsecase invalid title", async () => {
    const repo = new BookRepositoryMock();
    const usecase = new CreateBookUsecase(repo);
    await expect(
      usecase.call(
        "a",
        2,
        "Machado de Assis",
        150,
        GENRES.CONTO,
        1882,
        "penguim",
        4
      )
    ).rejects.toThrowError("Field title is not valid");
  });
});
