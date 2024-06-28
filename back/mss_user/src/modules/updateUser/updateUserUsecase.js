import { User } from "../../shared/domain/entities/user.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";

export class UpdateUserUsecase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async call(userId, newName, newEmail, NewGenre, newFavoriteBook) {
    if (!User.validateUserId(userId)) {
      throw new EntityError("Field userId is not valid");
    }

    const user = await this.userRepository.getUser(userId);

    if (!user) {
      throw new NoItemsFound("userId");
    }

    return await this.userRepository.updateUser(
      userId,
      newName,
      newEmail,
      NewGenre,
      newFavoriteBook
    );
  }
}
