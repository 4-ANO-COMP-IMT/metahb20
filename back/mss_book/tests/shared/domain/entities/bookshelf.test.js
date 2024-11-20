import { describe, test, expect } from "vitest";
import { Bookshelf } from "../../../../src/shared/domain/entities/bookshelf.js";
import { EntityError } from "../../../../src/shared/helpers/errors/domainErrors.js";

describe("Tests for Bookshelf entity", () => {
  const validUserID = "123e4567-e89b-12d3-a456-426614174000";
  const validBookIDs = [
    "367f3e10-4649-5e8e-acc6-4669644a520e",
    "367f3e10-4649-5e8e-acc6-4669644a520f",
  ];

  test("Test Create Bookshelf", () => {
    const bookshelf = new Bookshelf(
      validUserID,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs
    );
    expect(bookshelf).toBeInstanceOf(Bookshelf);
  });

  test("Test Create Bookshelf with invalid userID", () => {
    expect(() => {
      new Bookshelf(
        "invalid-user-id",
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs
      );
    }).toThrow("userID");
  });

  test("Test Create Bookshelf with invalid read book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        ["invalid-book-id"],
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs
      );
    }).toThrow("read");
  });

  test("Test Create Bookshelf with invalid reading book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        validBookIDs,
        ["invalid-book-id"],
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs
      );
    }).toThrow("reading");
  });

  test("Test Create Bookshelf with invalid willRead book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        validBookIDs,
        validBookIDs,
        ["invalid-book-id"],
        validBookIDs,
        validBookIDs,
        validBookIDs
      );
    }).toThrow("willRead");
  });

  test("Test Create Bookshelf with invalid reReading book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        ["invalid-book-id"],
        validBookIDs,
        validBookIDs
      );
    }).toThrow("reReading");
  });

  test("Test Create Bookshelf with invalid dropped book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        ["invalid-book-id"],
        validBookIDs
      );
    }).toThrow("dropped");
  });

  test("Test Create Bookshelf with invalid favorites book IDs", () => {
    expect(() => {
      new Bookshelf(
        validUserID,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        validBookIDs,
        ["invalid-book-id"]
      );
    }).toThrow("favorites");
  });

  test("Test Bookshelf toJSON method", () => {
    const bookshelf = new Bookshelf(
      validUserID,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs,
      validBookIDs
    );
    const json = bookshelf.toJSON();
    expect(json).toEqual({
      userID: validUserID,
      read: validBookIDs,
      reading: validBookIDs,
      willRead: validBookIDs,
      reReading: validBookIDs,
      dropped: validBookIDs,
      favorites: validBookIDs,
    });
  });

  test("Test Bookshelf fromJSON method", () => {
    const json = {
      userID: validUserID,
      read: validBookIDs,
      reading: validBookIDs,
      willRead: validBookIDs,
      reReading: validBookIDs,
      dropped: validBookIDs,
      favorites: validBookIDs,
    };
    const bookshelf = Bookshelf.fromJSON(json);
    expect(bookshelf).toBeInstanceOf(Bookshelf);
    expect(bookshelf.userID).toBe(validUserID);
    expect(bookshelf.read).toEqual(validBookIDs);
    expect(bookshelf.reading).toEqual(validBookIDs);
    expect(bookshelf.willRead).toEqual(validBookIDs);
    expect(bookshelf.reReading).toEqual(validBookIDs);
    expect(bookshelf.dropped).toEqual(validBookIDs);
    expect(bookshelf.favorites).toEqual(validBookIDs);
  });
});
