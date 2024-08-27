import { describe, test, expect } from "vitest";
import { BookRepositoryMock } from "../../../src/shared/infra/repositories/bookRepositoryMock.js";
import { GetAllBooksUsecase } from "../../../src/modules/getAllBooks/getAllBooksUsecase.js";
import { GetAllBooksController } from "../../../src/modules/getAllBooks/getAllBooksController.js";

describe("Tests for GetAllBooksController", () => {
  test("Test call", async () => {
    const bookRepositoryMock = new BookRepositoryMock();
    const getAllBooksUsecase = new GetAllBooksUsecase(bookRepositoryMock);
    const getAllBooksController = new GetAllBooksController(getAllBooksUsecase);
    const response = await getAllBooksController.call();
    expect(response.statusCode).toEqual(200);
    expect(response.body["books"]).toHaveLength(4);
    expect(response.body["message"]).toEqual("all books were retrieved");
    expect(response.body["books"]).toEqual([
      {
        bookId: "367f3e10-4649-5e8e-acc6-4669644a520e",
        title: "1984",
        edition: 1,
        autor: "George Orwell",
        pages: 200,
        genre: "Ficção",
        publishDate: -649029540000,
        publisher: "Secker and Warburg",
        rating: 5,
      },
      {
        bookId: "5af7d193-6723-50b5-a041-1478600bf630",
        title: "O Senhor dos Anéis",
        edition: 1,
        autor: "J. R. R. Tolkien",
        pages: 1000,
        genre: "Ficção",
        publishDate: -486853627000,
        publisher: "Allen & Unwin",
        rating: 5,
      },
      {
        bookId: "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        title: "Diário de Um Banana",
        edition: 1,
        autor: "Jeff Kinney",
        pages: 300,
        genre: "Conto",
        publishDate: 1211165573000,
        publisher: "Amulet Books",
        rating: 5,
      },
      {
        bookId: "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        title: "O Pequeno Príncipe",
        edition: 1,
        autor: "Antoine de Saint-Exupéry",
        pages: 100,
        genre: "Poema",
        publishDate: -843858427000,
        publisher: "Reynal & Hitchcock",
        rating: 5,
      },
    ]);
  });
});
