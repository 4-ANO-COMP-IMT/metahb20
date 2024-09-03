import {
  MissingParameters,
  WrongTypeParameter,
} from "../../shared/helpers/errors/controllerErrors.js";
import {
  BadRequest,
  Created,
  InternalServerError,
} from "../../shared/helpers/externalInterfaces/httpCodes.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { DuplicatedItem } from "../../shared/helpers/errors/usecaseErrors.js";

export class CreateBookshelfController {
  constructor(createBookshelfUsecase) {
    this.usecase = createBookshelfUsecase;
  }

  async call(request) {
    try {
      if (request.data.userID === undefined) {
        throw new MissingParameters("userID");
      }

      if (typeof request.data.userID !== "string") {
        throw new WrongTypeParameter(
          "userID",
          "string",
          typeof request.data.userID
        );
      }

      const bookshelf = await this.usecase.call(request.data.userID);

      const viewmodel = {
        bookshelf: bookshelf.toJSON(),
        message: "the bookshelf was created",
      };

      const response = new Created(viewmodel);
      return response;
    } catch (error) {
      if (error instanceof EntityError) {
        const response = new BadRequest(error.message);
        return response;
      }
      if (error instanceof DuplicatedItem) {
        const response = new BadRequest(error.message);
        return response;
      }
      if (error instanceof MissingParameters) {
        const response = new BadRequest(error.message);
        return response;
      }
      if (error instanceof WrongTypeParameter) {
        const response = new BadRequest(error.message);
        return response;
      }
      const response = new InternalServerError();
      return response;
    }
  }
}
