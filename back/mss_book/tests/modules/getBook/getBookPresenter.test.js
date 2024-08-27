import { getBookPresenter } from "../../../src/modules/getBook/getBookPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";

describe("Test getBookPresenter", () => {
  test("Test getBookPresenter", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
    });

    const response = await getBookPresenter(request, repo);

    expect(response.statusCode).toEqual(200);
    expect(response.body["book"]["title"]).toEqual("1984");
    expect(response.body["book"]["edition"]).toEqual(1);
    expect(response.body["book"]["autor"]).toEqual("George Orwell");
    expect(response.body["book"]["pages"]).toEqual(200);
    expect(response.body["book"]["genre"]).toEqual("Ficção");
    expect(response.body["book"]["publishDate"]).toEqual(-649029540000);
    expect(response.body["book"]["publisher"]).toEqual("Secker and Warburg");
    expect(response.body["book"]["rating"]).toEqual(5);
  });

  test("Test getBookPresenter missing bookId", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({});

    const response = await getBookPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is missing");
  });

  test("Test getBookPresenter invalid bookId", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      bookId: "3",
    });

    const response = await getBookPresenter(request, repo);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is not valid");
  });

  test("Test getBookPresenter NoItemsFound", async () => {
    const repo = new BookRepositoryMock();
    const request = new HttpRequest({
      bookId: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await getBookPresenter(request, repo);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for bookId");
  });
});
