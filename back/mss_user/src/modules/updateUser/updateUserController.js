import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import {
  MissingParameters,
  WrongTypeParameter,
} from "../../shared/helpers/errors/controllerErrors.js";
import {
  OK,
  BadRequest,
  NotFound,
  InternalServerError,
} from "../../shared/helpers/externalInterfaces/httpCodes.js";
import { validate } from "uuid";
import { User } from "../../shared/domain/entities/user.js";

export default class UpdateUserController {
  constructor(usecase) {
    this.usecase = usecase;
  }

  async call(request) {
    try {
      if (request.data.userId === undefined) {
        throw new MissingParameters("userId");
      }

      if (typeof request.data.userId !== "string") {
        throw new WrongTypeParameter(
          "userId",
          "string",
          typeof request.data.userId
        );
      }
      if (!validate(request.data.userId)) {
        throw new EntityError("userId");
      }

      if (request.data.name !== undefined) {
        if (typeof request.data.name !== "string") {
          throw new WrongTypeParameter(
            "name",
            "string",
            typeof request.data.name
          );
        } else if (!User.validateName(request.data.new_name)) {
          throw new EntityError("name");
        }
      }

      if (request.data.email !== undefined) {
        if (typeof request.data.email !== "string") {
          throw new WrongTypeParameter(
            "email",
            "string",
            typeof request.data.email
          );
        } else if (!User.validateEmail(request.data.new_email)) {
          throw new EntityError("email");
        }
      }

      if (request.data.genre !== undefined) {
        if (typeof request.data.genre !== "string") {
          throw new WrongTypeParameter(
            "genre",
            "string",
            typeof request.data.genre
          );
        } else if (!User.validateFavoriteGenres(request.data.new_genre)) {
          throw new EntityError("genre");
        }
      }

      if (request.data.favoriteBook !== undefined) {
        if (typeof request.data.favoriteBook !== "string") {
          throw new WrongTypeParameter(
            "favoriteBook",
            "string",
            typeof request.data.favoriteBook
          );
        } else if (!User.validateFavoriteBook(request.data.new_favoriteBook)) {
          throw new EntityError("favoriteBook");
        }
      }

      const user = await this.usecase.call(
        request.data.userId,
        request.data.new_name,
        request.data.new_email,
        request.data.new_genre,
        request.data.new_favoriteBook
      );

      const viewmodel = {
        user: user.toJSON(),
        message: "the user was updated",
      };

      return new OK(viewmodel);
    } catch (error) {
      if (error instanceof EntityError) {
        return new BadRequest(error.message);
      }
      if (error instanceof NoItemsFound) {
        return new NotFound(error.message);
      }
      if (error instanceof MissingParameters) {
        return new BadRequest(error.message);
      }
      if (error instanceof WrongTypeParameter) {
        return new BadRequest(error.message);
      }
      if (error instanceof Error) {
        return new InternalServerError(error.message);
      }
    }
  }
}
