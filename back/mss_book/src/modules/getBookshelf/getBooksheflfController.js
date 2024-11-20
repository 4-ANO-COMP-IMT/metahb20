import {
  MissingParameters,
  WrongTypeParameter,
} from "../../shared/helpers/errors/controllerErrors.js";
import {
  BadRequest,
  OK,
  NotFound,
  InternalServerError,
} from "../../shared/helpers/externalInterfaces/httpCodes.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";

export class GetBookshelfController {
  constructor(getBookshelfUsecase) {
    this.usecase = getBookshelfUsecase;
  }

  async call(request) {
    try {
      if (request.data.userID === undefined) {
        throw new MissingParameters("userID");
      }
      if (typeof request.data.userID !== "string") {
        throw new WrongTypeParameter("userID");
      }

      const bookshelf = await this.usecase.call(request.data.userID);

      const viewmodel = {
        bookshelf: bookshelf.toJSON(),
        message: "the bookshelf was retrieved",
      };

      const response = new OK(viewmodel);
      return response;
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
