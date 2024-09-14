import { Book } from "../../domain/entities/book.js";
import { GENRES } from "../../domain/enums/genresEnum.js";
import { Bookshelf } from "../../domain/entities/bookshelf.js";

export class BookRepositoryMock {
  constructor() {
    this.books = [
      new Book(
        "367f3e10-4649-5e8e-acc6-4669644a520e",
        "1984",
        1,
        "George Orwell",
        200,
        GENRES.FICCAO,
        -649029540000,
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
        -486853627000,
        "Allen & Unwin",
        5
      ),
      new Book(
        "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        "Diário de Um Banana",
        1,
        "Jeff Kinney",
        300,
        GENRES.CONTO,
        1211165573000,
        "Amulet Books",
        5
      ),
      new Book(
        "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        "O Pequeno Príncipe",
        1,
        "Antoine de Saint-Exupéry",
        100,
        GENRES.POEMA,
        -843858427000,
        "Reynal & Hitchcock",
        5
      ),
      new Book(
        "02573522-a8a9-53a3-b04a-2442deb557a7",
        "Harry Potter e a Pedra Filosofal",
        1,
        "J.K. Rowling",
        230,
        GENRES.FICCAO,
        867294000000,
        "Scholastic",
        5
      ),
      new Book(
        "d263d1ea-de86-5088-a863-7aee14aff23b",
        "Harry Potter e a Câmara Secreta",
        1,
        "J.K. Rowling",
        200,
        GENRES.FICCAO,
        899348400000,
        "Scholastic",
        5
      ),
      new Book(
        "ec052f06-0fa7-5d4c-9f98-add2c4a2863d",
        "Harry Potter e o Prisioneiro de Azkaban",
        1,
        "J.K. Rowling",
        270,
        GENRES.FICCAO,
        931402800000,
        "Scholastic",
        5
      ),
      new Book(
        "c70a2baa-69a3-5df8-963a-4d87dce6eff6",
        "Harry Potter e o Cálice de Fogo",
        1,
        "J.K. Rowling",
        510,
        GENRES.FICCAO,
        963025200000,
        "Scholastic",
        5
      ),
      new Book(
        "9b1b3131-acbe-5413-b3f3-ab4032470ebd",
        "Harry Potter e a Ordem da Fênix",
        430,
        "J.K. Rowling",
        GENRES.FICCAO,
        1056164400000,
        "Scholastic",
        5
      ),
      new Book(
        "910c72af-6b7f-5ad0-9208-3f5ba9ee8697",
        "Harry Potter e o Enigma do Príncipe",
        520,
        "J.K. Rowling",
        GENRES.FICCAO,
        1121482800000,
        "Scholastic",
        5
      ),
      new Book(
        "45475e6a-d12a-5ea0-954c-9f780acc16bb",
        "Harry Potter e as Relíquias da Morte",
        570,
        "J.K. Rowling",
        GENRES.FICCAO,
        1184986800000,
        "Scholastic",
        5
      ),
      new Book(
        "d932cbe7-c77d-5423-a80b-e2c85b2a02a1",
        "Ensaio sobre a Cegueira",
        312,
        "José Saramago",
        GENRES.FICCAO,
        788925600000,
        "Companhia das Letras",
        5
      ),
      new Book(
        "c5db3163-117a-59c6-b0ec-af2950cb6e9f",
        "Diário do subsolo",
        127,
        "Fiódor Dostoiévski",
        GENRES.FICCAO,
        1571799600000,
        "Martin Claret",
        5
      ),
      new Book(
        "cd6bfda8-cf2d-5e9f-86ae-a4fa0e22dd34",
        "Noites Brancas",
        288,
        "Fiódor Dostoiévski",
        GENRES.FICCAO,
        1651978800000,
        "Antofágica",
        5
      ),
      new Book(
        "9ac38ed6-22b6-5984-ab1e-e883f86206fd",
        "A Metamorfose",
        116,
        "Franz Kafka",
        GENRES.FICCAO,
        1579057200000,
        "Lafonte",
        5
      ),
      new Book(
        "32b1efe9-5a4f-5a50-bd0e-f62912b31dbe",
        "Crime e Castigo",
        592,
        "Fiódor Dostoiévski",
        GENRES.FICCAO,
        1164852000000,
        "L&PM",
        5
      ),
      new Book(
        "cc5bab92-6388-55e8-8269-99163bdf9127",
        "Frankenstein",
        204,
        "Mary Shelley",
        GENRES.TERROR,
        1228010400000,
        "Principis",
        5
      ),
      new Book(
        "f4508c65-149f-57cf-82a5-0c98c4a4dd9a",
        "Drácula",
        580,
        "Bram Stocker",
        GENRES.TERROR,
        1540350000000,
        "Dark Edition",
        5
      ),
      new Book(
        "df6e47de-e14d-522f-8bd3-1c99544554b3",
        "Orgulho e Preconceito",
        288,
        "Jane Austen",
        GENRES.ROMANCE,
        1617937200000,
        "Tricaju",
        5
      ),
      new Book(
        "d132a5f7-83dd-59f2-bfc8-0b822a95baae",
        "Persuasão",
        288,
        "Jane Austen",
        GENRES.ROMANCE,
        1532314800000,
        "Martin Claret",
        5
      ),
      new Book(
        "e798182b-d465-5570-8228-a65762aaca1b",
        "O Morro dos Ventos Uivantes",
        524,
        "Emily Brontë",
        GENRES.ROMANCE,
        1406862000000,
        "Martin Claret",
        5
      ),
      new Book(
        "6899bafb-d4da-5a2e-8557-c968a3a9c0aa",
        "O Alienista",
        96,
        "Machado de Assis",
        GENRES.FICCAO,
        880855200000,
        "Cultura",
        5
      ),
      new Book(
        "20d52641-1700-5804-bc6c-9def3eeee043",
        "Dom Casmurro",
        346,
        "Machado de Assis",
        GENRES.FICCAO,
        1623812400000,
        "Andre L D Cunha",
        5
      ),
      new Book(
        "69b540d8-4ef9-5469-aedc-eba98bce1361",
        "Memórias Póstumas de Brás Cubas",
        368,
        "Machado de Assis",
        GENRES.FICCAO,
        1410836400000,
        "Penguin-Companhia",
        5
      ),
    ];

    this.bookshelves = [
      new Bookshelf(
        "d5135e3e-646a-55e7-a38d-9724159b7f9f",
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        ["5af7d193-6723-50b5-a041-1478600bf630"]
      ),

      new Bookshelf(
        "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
        [
          "5af7d193-6723-50b5-a041-1478600bf630",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ],
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "5af7d193-6723-50b5-a041-1478600bf630",
        ],
        [],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        [],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"]
      ),

      new Bookshelf(
        "11ee92f3-07f6-5b5b-a652-ebe2c276e560",
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "367f3e10-4649-5e8e-acc6-4669644a520e",
        ],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        ["7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        [],
        [],
        [
          "5af7d193-6723-50b5-a041-1478600bf630",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ]
      ),

      new Bookshelf(
        "46bf72c5-dec3-58c6-89da-6538628d4acb",
        [
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          ,
          "5af7d193-6723-50b5-a041-1478600bf630",
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ],
        ["6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6"],
        ["5af7d193-6723-50b5-a041-1478600bf630"],
        [],
        ["367f3e10-4649-5e8e-acc6-4669644a520e"],
        [
          "6c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
          "7c9ea682-36bb-58ba-b590-eaf2a9c7e0c6",
        ]
      ),
    ];
  }

  async getBook(id) {
    const book = this.books.find((book) => book.bookId === id);
    return book || null;
  }

  async getBookshelf(userID) {
    const bookshelf = this.bookshelves.find(
      (bookshelf) => bookshelf.userID === userID
    );
    return bookshelf || null;
  }

  async getAllBooks() {
    return this.books;
  }

  async createBook(book) {
    this.books.push(book);
    return book;
  }

  async updateBook(
    id,
    {
      title = null,
      edition = null,
      autor = null,
      pages = null,
      genre = null,
      publishDate = null,
      publisher = null,
      rating = null,
    } = {}
  ) {
    const book = await this.getBook(id);
    if (!book) {
      return null;
    }

    if (title !== null) book.title = title;
    if (edition !== null) book.edition = edition;
    if (autor !== null) book.autor = autor;
    if (pages !== null) book.pages = pages;
    if (genre !== null) book.genre = genre;
    if (publishDate !== null) book.publishDate = new Date(publishDate);
    if (publisher !== null) book.publisher = publisher;
    if (rating !== null) book.rating = rating;

    return book;
  }

  async deleteBook(id) {
    const book = await this.getBook(id);
    if (!book) {
      return null;
    }

    this.books = this.books.filter((book) => book.bookId !== id);
    return book;
  }

  async createBookshelf(bookshelf) {
    this.bookshelves.push(bookshelf);
    return bookshelf;
  }

  async deleteBookshelf(userID) {
    const bookshelf = await this.getBookshelf(userID);
    if (!bookshelf) {
      return null;
    }

    this.bookshelves = this.bookshelves.filter(
      (bookshelf) => bookshelf.userID !== userID
    );
    return bookshelf;
  }

  async updateBookshelf(
    userID,
    {
      read = null,
      reading = null,
      willRead = null,
      reReading = null,
      dropped = null,
      favorites = null,
    } = {}
  ) {
    const bookshelf = await this.getBookshelf(userID);
    if (!bookshelf) {
      return null;
    }

    if (read !== null) bookshelf.read = read;
    if (reading !== null) bookshelf.reading = reading;
    if (willRead !== null) bookshelf.willRead = willRead;
    if (reReading !== null) bookshelf.reReading = reReading;
    if (dropped !== null) bookshelf.dropped = dropped;
    if (favorites !== null) bookshelf.favorites = favorites;

    return bookshelf;
  }
}
