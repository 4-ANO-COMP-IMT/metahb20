import { User } from "../../shared/domain/entities/user.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const eventBusURL = process.env.EVENTBUS_URL;
export class CreateUserUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(name, email, favoriteGenre, favoriteBook) {
    const userId = uuidv4();

    const user = new User(userId, name, email, favoriteGenre, favoriteBook);

    try {
      await axios.post(eventBusURL, {
        type: "UserCreated",
        userID: userId,
      });
    } catch (err) {}
    return this.repo.createUser(user);
  }
}
