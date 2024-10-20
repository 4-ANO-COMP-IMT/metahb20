import { User } from "../../shared/domain/entities/user.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import axios from "axios";

const eventBusURL = process.env.EVENTBUS_URL;
export class DeleteUserUsecase {
  constructor(repo) {
    this.repo = repo;
  }

  async call(id) {
    if (!User.validateUserId(id)) {
      throw new EntityError("userId");
    }

    const user = await this.repo.deleteUser(id);
    if (user === null) {
      throw new NoItemsFound("userId");
    }
    try {
      await axios.post(eventBusURL, {
        type: "UserDeleted",
        userID: id,
      });
    } catch (err) {}

    return user;
  }
}
