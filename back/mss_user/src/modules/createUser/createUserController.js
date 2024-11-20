import {
  MissingParameters,
  WrongTypeParameter,
} from "../../shared/helpers/errors/controllerErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { DuplicatedItem } from "../../shared/helpers/errors/usecaseErrors.js";
import {
  BadRequest,
  Created,
  InternalServerError,
} from "../../shared/helpers/externalInterfaces/httpCodes.js";
import { GENRES } from "../../shared/domain/enums/genresEnum.js";
export class CreateUserController {
  constructor(usecase) {
    this.usecase = usecase;
  }

  async call(request) {
    try {
      if (request.data.name === undefined) {
        throw new MissingParameters("name");
      }
      if (request.data.email === undefined) {
        throw new MissingParameters("email");
      }
      if (request.data.favoriteGenres === undefined) {
        throw new MissingParameters("favoriteGenres");
      }
      const favoriteGenres = request.data.favoriteGenres;
      if (!Object.values(GENRES).includes(favoriteGenres)) {
        throw new EntityError("favoriteGenres");
      }
      if (request.data.favoriteBook === undefined) {
        throw new MissingParameters("favoriteBook");
      }

      if (typeof request.data.name !== "string") {
        throw new WrongTypeParameter(
          "name",
          "string",
          typeof request.data.name
        );
      }
      if (typeof request.data.email !== "string") {
        throw new WrongTypeParameter(
          "email",
          "string",
          typeof request.data.email
        );
      }

      if (typeof request.data.favoriteBook !== "string") {
        throw new WrongTypeParameter(
          "favoriteBook",
          "string",
          typeof request.data.favoriteBook
        );
      }

      const user = await this.usecase.call(
        request.data.name,
        request.data.email,
        request.data.favoriteGenres,
        request.data.favoriteBook
      );

      const viewmodel = {
        user: user.toJSON(),
        message: "the user was created",
      };
      const response = new Created(viewmodel);
      return response;
    } catch (error) {
      if (error instanceof EntityError) {
        return new BadRequest(error.message);
      }
      if (error instanceof MissingParameters) {
        return new BadRequest(error.message);
      }
      if (error instanceof WrongTypeParameter) {
        return new BadRequest(error.message);
      }
      if (error instanceof DuplicatedItem) {
        return new BadRequest(error.message);
      }
      if (error instanceof Error) {
        return new InternalServerError(error.message);
      }
    }
  }
}
