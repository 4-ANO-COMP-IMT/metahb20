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
import { EntityError } from "../../shared/helpers/errors/domainErrors.js";
import { NoItemsFound } from "../../shared/helpers/errors/usecaseErrors.js";

export class UpdateBookshelfController {
  constructor(usecase) {
    this.usecase = usecase;
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

      if (request.data.read !== undefined) {
        if (!Array.isArray(request.data.read)) {
          throw new WrongTypeParameter(
            "read",
            "array",
            typeof request.data.read
          );
        }
      }

      if (request.data.reading !== undefined) {
        if (!Array.isArray(request.data.reading)) {
          throw new WrongTypeParameter(
            "reading",
            "array",
            typeof request.data.reading
          );
        }
      }

      if (request.data.willRead !== undefined) {
        if (!Array.isArray(request.data.willRead)) {
          throw new WrongTypeParameter(
            "willRead",
            "array",
            typeof request.data.willRead
          );
        }
      }

      if (request.data.reReading !== undefined) {
        if (!Array.isArray(request.data.reReading)) {
          throw new WrongTypeParameter(
            "reReading",
            "array",
            typeof request.data.reReading
          );
        }
      }

      if (request.data.dropped !== undefined) {
        if (!Array.isArray(request.data.dropped)) {
          throw new WrongTypeParameter(
            "dropped",
            "array",
            typeof request.data.dropped
          );
        }
      }

      if (request.data.favorites !== undefined) {
        if (!Array.isArray(request.data.favorites)) {
          throw new WrongTypeParameter(
            "favorites",
            "array",
            typeof request.data.favorites
          );
        }
      }

      const updatedBookshelf = await this.usecase.call(
        request.data.userID,
        request.data.read,
        request.data.reading,
        request.data.willRead,
        request.data.reReading,
        request.data.dropped,
        request.data.favorites
      );

      const viewmodel = {
        bookshelf: updatedBookshelf.toJSON(),
        message: "the bookshelf was updated",
      };

      const response = new OK(viewmodel);

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
      if (error instanceof NoItemsFound) {
        return new NotFound(error.message);
      }
      if (error instanceof Error) {
        return new InternalServerError(error.message);
      }
    }
  }
}
