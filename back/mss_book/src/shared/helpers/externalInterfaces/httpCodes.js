import { httpStatusCodes } from "../enum/httpStatusCodes.js";
import { HttpResponse } from "./httpModels.js";

class OK extends HttpResponse {
  constructor(body = null) {
    super(httpStatusCodes.OK, body);
  }
}

class Created extends HttpResponse {
  constructor(body = null) {
    super(httpStatusCodes.CREATED, body);
  }
}

class NoContent extends HttpResponse {
  constructor() {
    super(httpStatusCodes.NO_CONTENT, undefined);
  }
}

class BadRequest extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.BAD_REQUEST, body);
  }
}

class InternalServerError extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.INTERNAL_SERVER_ERROR, body);
  }
}

class NotFound extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.NOT_FOUND, body);
  }
}

class Conflict extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.CONFLICT, body);
  }
}

class RedirectResponse extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.REDIRECT, body);
  }
}

class Forbidden extends HttpResponse {
  constructor(body) {
    super(httpStatusCodes.FORBIDDEN, body);
  }
}

export {
  OK,
  Created,
  NoContent,
  BadRequest,
  InternalServerError,
  NotFound,
  Conflict,
  RedirectResponse,
  Forbidden,
};
