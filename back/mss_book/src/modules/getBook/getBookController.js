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

export class GetBookController {
  constructor(getBookUsecase) {
    this.usecase = getBookUsecase;
  }

  async call(request) {
    try {
      if (request.data.bookId === undefined) {
        throw new MissingParameters("bookId");
      }
      if (typeof request.data.bookId !== "string") {
        throw new WrongTypeParameter("bookId");
      }

      const book = await this.usecase.call(request.data.bookId);

      const viewmodel = {
        book: book.toJSON(),
        message: "the book was retrieved",
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
