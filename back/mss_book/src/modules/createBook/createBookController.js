import { CreateBookUsecase } from "./createBookUsecase.js";
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

export class CreateBookController {
  constructor(createBookUsecase) {
    this.usecase = createBookUsecase;
  }

  async call(request) {
    try {
      if (request.data.title === undefined) {
        throw new MissingParameters("title");
      }
      if (typeof request.data.title !== "string") {
        throw new WrongTypeParameter(
          "title",
          "string",
          typeof request.data.title
        );
      }
      if (request.data.edition === undefined) {
        throw new MissingParameters("edition");
      }
      if (typeof request.data.edition !== "number") {
        throw new WrongTypeParameter(
          "edition",
          "number",
          typeof request.data.edition
        );
      }
      if (request.data.autor === undefined) {
        throw new MissingParameters("autor");
      }
      if (typeof request.data.autor !== "string") {
        throw new WrongTypeParameter(
          "autor",
          "string",
          typeof request.data.autor
        );
      }
      if (request.data.pages === undefined) {
        throw new MissingParameters("pages");
      }
      if (typeof request.data.pages !== "number") {
        throw new WrongTypeParameter(
          "pages",
          "number",
          typeof request.data.pages
        );
      }
      if (request.data.genre === undefined) {
        throw new MissingParameters("genre");
      }
      if (typeof request.data.genre !== "string") {
        throw new WrongTypeParameter(
          "genre",
          "string",
          typeof request.data.genre
        );
      }
      if (request.data.publishDate === undefined) {
        throw new MissingParameters("publishDate");
      }
      if (typeof request.data.publishDate !== "number") {
        throw new WrongTypeParameter(
          "publishDate",
          "number",
          typeof request.data.publishDate
        );
      }
      if (request.data.publisher === undefined) {
        throw new MissingParameters("publisher");
      }
      if (typeof request.data.publisher !== "string") {
        throw new WrongTypeParameter(
          "publisher",
          "string",
          typeof request.data.publisher
        );
      }
      if (request.data.rating === undefined) {
        throw new MissingParameters("rating");
      }
      if (typeof request.data.rating !== "number") {
        throw new WrongTypeParameter(
          "rating",
          "number",
          typeof request.data.rating
        );
      }

      const book = await this.usecase.call(
        request.data.title,
        request.data.edition,
        request.data.autor,
        request.data.pages,
        request.data.genre,
        request.data.publishDate,
        request.data.publisher,
        request.data.rating
      );

      const viewmodel = {
        book: book.toJSON(),
        message: "the book was created",
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
      if (error instanceof Error) {
        return new InternalServerError(error.message);
      }
    }
  }
}
