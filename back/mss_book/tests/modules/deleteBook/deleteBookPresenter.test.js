import { getBookPresenter } from "../../../src/modules/getBook/getBookPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";

describe("Tests for DeleteBook Presenter", () => {
  test("Test DeleteBookPresenter", async () => {
    const request = new HttpRequest({
      bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
    });

    const response = await getBookPresenter(request);

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

  test("Test DeleteBookPresenter missing bookId", async () => {
    const request = new HttpRequest({});

    const response = await getBookPresenter(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is missing");
  });

  test("Test DeleteBookPresenter invalid bookId", async () => {
    const request = new HttpRequest({
      bookId: "3",
    });

    const response = await getBookPresenter(request);

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual("Field bookId is not valid");
  });

  test("Test DeleteBookPresenter NoItemsFound", async () => {
    const request = new HttpRequest({
      bookId: "6736790e-61f4-58d6-a80c-00937f3e49cc",
    });

    const response = await getBookPresenter(request);

    expect(response.statusCode).toEqual(404);
    expect(response.body).toEqual("No items found for bookId");
  });
});
