import { Book } from "../../domain/entities/book.js";
import { GENRES } from "../../domain/enums/genresEnum.js";

export class BookRepositoryMock {
  constructor() {
    this.books = [
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwellr",
        200,
        GENRES.FICCAO,
        new Date(-649029540000),
        "Secker and Warburg",
        5
      ),
      new Book(
        "5af7d193-6723-50b5-a041-1478600bf630",
        "O Senhor dos Anéis",
        1,
        "J. R. R. Tolkien",
        1000,
        GENRES.FICCAO,
        new Date(-649029540000),
        "Allen & Unwin",
        5
      ),
    ];
  }
}
