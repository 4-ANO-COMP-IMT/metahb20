import { User } from "../../shared/domain/entities/user.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const eventBusURL = process.env.EVENTBUS_URL;
export class CreateUserUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(name, email, favoriteGenre, favoriteBook) {
    const userId = uuidv4();

    const user = new User(userId, name, email, favoriteGenre, favoriteBook);

    const newUserID = user.userId;
    try {
      const response = await axios.post(eventBusURL, {
        type: "UserCreated",
        userID: newUserID,
      });
    } catch (err) {}
    return this.repo.createUser(user);
  }
}
