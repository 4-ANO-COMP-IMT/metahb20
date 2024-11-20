import { describe, test, expect } from "vitest";
import { Book } from "../../../../src/shared/domain/entities/book.js";
import { GENRES } from "../../../../src/shared/domain/enums/genresEnum.js";
import { EntityError } from "../../../../src/shared/helpers/errors/domainErrors.js";

describe("Tests for Book entity", () => {
  test("Test Create Book", () => {
    const book = new Book(
      "367f3e10-4649-5e8e-acc6-4669644a520e",
      "1984",
      1,
      "George Orwellr",
      200,
      GENRES.FICCAO,
      -649029540000,
      "Secker and Warburg",
      5
    );
    expect(book).toBeInstanceOf(Book);
  });

  test("Test Create Book with invalid bookId", () => {
    expect(() => {
      new Book(
        "3",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field bookId is not valid");
  });

  test("Test Create Book with invalid title", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field title is not valid");
  });

  test("Test Create Book with invalid edition", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        "1",
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field edition is not valid");
  });

  test("Test Create Book with invalid autor", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "G",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field autor is not valid");
  });

  test("Test Create Book with invalid pages", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        0,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field pages is not valid");
  });

  test("Test Create Book with invalid genre", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        "FICCAO",
        -649029540000,
        "Secker and Warburg",
        5
      );
    }).toThrow("Field genre is not valid");
  });

  test("Test Create Book with invalid publishDate", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        "-649029540000",
        "Secker and Warburg",
        5
      );
    }).toThrow("Field publishDate is not valid");
  });

  test("Test Create Book with invalid publisher", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "S",
        5
      );
    }).toThrow(EntityError);
  });

  test("Test Create Book with invalid rating", () => {
    expect(() => {
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        -649029540000,
        "Secker and Warburg",
        6
      );
    }).toThrow("Field rating is not valid");
  });

  test("Test Create Book assert publishDate is Date type", () => {
    const book = new Book(
      "367f3e10-4649-5e8e-acc6-4669644a520e",
      "1984",
      1,
      "George Orwellr",
      200,
      GENRES.FICCAO,
      -649029540000,
      "Secker and Warburg",
      5
    );
    expect(book.publishDate).toBeInstanceOf(Date);
  });
});
