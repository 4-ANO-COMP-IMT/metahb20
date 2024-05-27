import { User } from "../../shared/domain/entities/user.js";
import { v4 as uuidv4 } from "uuid";

export class CreateUserUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(name, email, favoriteGenre, favoriteBook) {
    const userId = uuidv4();

    const user = new User(userId, name, email, favoriteGenre, favoriteBook);

    return this.repo.createUser(user);
  }
}
