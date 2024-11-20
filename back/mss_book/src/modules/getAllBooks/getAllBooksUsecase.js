export class GetAllBooksUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call() {
    return this.repo.getAllBooks();
  }
}
