import { User } from "../../../../src/shared/domain/entities/user.js";
import { GENRES } from "../../../../src/shared/domain/enums/genresEnum.js";
import { expect, test, describe } from "vitest";
import { EntityError } from "../../../../src/shared/helpers/errors/domainErrors.js";

describe("[User Entity Tests]", () => {
  test("Should create a new User entity", () => {
    const user = new User(
      "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
      "Mildred McGee",
      "etozis@pedar.va",
      GENRES.TERROR,
      "1984",
      ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
    );
    expect(user).toBeInstanceOf(User);
  });

  test("Assert throws error with invalid userId", () => {
    expect(
      () =>
        new User(
          "93bc6ada-c0d1-7054-66ab-e17414c48ae",
          "Mildred McGee",
          "etozis@pedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError(EntityError);
  });

  test("Assert throws error with invalid Name", () => {
    expect(
      () =>
        new User(
          "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
          "M",
          "etozis@pedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field name is not valid");
  });

  test("Assert throws error with invalid email", () => {
    expect(
      () =>
        new User(
          "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
          "Mildred McGee",
          "etozispedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field email is not valid");
  });

  test("Assert throws error with email longer than max", () => {
    expect(
      () =>
        new User(
          "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
          "Mildred McGee",
          "etozisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@pedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field email is not valid");
  });

  test("Assert thorws error favoriteGenres genre is not enum", () => {
    expect(
      () =>
        new User(
          "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
          "Mildred McGee",
          "etozis@pedar.va",
          "teste",
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field favoriteGenres is not valid");
  });

  test("Assert throws error userId is not string", () => {
    expect(
      () =>
        new User(
          25,
          "Mildred McGee",
          "etozis@pedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field userId is not valid");
  });

  test("Assert throws error userId is undefined", () => {
    expect(
      () =>
        new User(
          undefined,
          "Mildred McGee",
          "etozis@pedar.va",
          GENRES.TERROR,
          "1984",
          ["93bc6ada-c0d1-7054-66ab-e17414c48ae3"]
        )
    ).toThrowError("Field userId is not valid");
  });
});
