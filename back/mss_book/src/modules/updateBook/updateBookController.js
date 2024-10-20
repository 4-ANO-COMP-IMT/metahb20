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
import { GENRES } from "../../shared/domain/enums/genresEnum.js";

export class UpdateBookController {
  constructor(usecase) {
    this.usecase = usecase;
  }

  async call(request) {
    try {
      if (request.data.bookId === undefined) {
        throw new MissingParameters("bookID");
      }
      if (typeof request.data.bookId !== "string") {
        throw new WrongTypeParameter(
          "bookId",
          "string",
          typeof request.data.bookId
        );
      }

      if (request.data.title !== undefined) {
        if (typeof request.data.title !== "string") {
          throw new WrongTypeParameter(
            "title",
            "string",
            typeof request.data.title
          );
        }
      }

      if (request.data.edition !== undefined) {
        if (typeof request.data.edition !== "number") {
          throw new WrongTypeParameter(
            "edition",
            "number",
            typeof request.data.edition
          );
        }
      }

      if (request.data.autor !== undefined) {
        if (typeof request.data.autor !== "string") {
          throw new WrongTypeParameter(
            "autor",
            "string",
            typeof request.data.title
          );
        }
      }

      if (request.data.pages !== undefined) {
        if (typeof request.data.pages !== "number") {
          throw new WrongTypeParameter(
            "pages",
            "number",
            typeof request.data.pages
          );
        }
      }

      let newGenre = request.data.genre;
      if (newGenre !== undefined) {
        if (typeof newGenre !== "string") {
          throw new WrongTypeParameter("genre", "string", typeof newGenre);
        }
        if (!Object.keys(GENRES).includes(newGenre)) {
          throw new EntityError("genre");
        }
        newGenre = GENRES[newGenre];
      }

      if (request.data.publishDate !== undefined) {
        if (typeof request.data.publishDate !== "number") {
          throw new WrongTypeParameter(
            "publishDate",
            "number",
            typeof request.data.publishDate
          );
        }
      }

      if (request.data.publisher !== undefined) {
        if (typeof request.data.publisher !== "string") {
          throw new WrongTypeParameter(
            "publisher",
            "string",
            typeof request.data.publisher
          );
        }
      }

      if (request.data.rating !== undefined) {
        if (typeof request.data.rating !== "number") {
          throw new WrongTypeParameter(
            "rating",
            "number",
            typeof request.data.rating
          );
        }
      }

      const book = await this.usecase.call(
        request.data.bookId,
        request.data.title,
        request.data.edition,
        request.data.autor,
        request.data.pages,
        newGenre,
        request.data.publishDate,
        request.data.publisher,
        request.data.rating
      );

      const viewmodel = {
        book: book.toJSON(),
        message: "the book was updated",
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
