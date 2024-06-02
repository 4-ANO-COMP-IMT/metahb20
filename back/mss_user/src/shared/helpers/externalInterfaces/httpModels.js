import { httpStatusCodes } from "../enum/httpStatusCodes.js";

class HttpRequest {
  body;
  headers;
  queryParams;

  constructor(body, headers, queryParams) {
    this.body = body || {};
    this.headers = headers || {};
    this.queryParams = queryParams || {};

    const dataJson = {};

    if (typeof body === "object") {
      Object.assign(dataJson, body);
      const overlappingKeys = Object.keys(this.body).filter(
        (key) => key in this.queryParams || key in this.headers
      );
      if (overlappingKeys.length > 0) {
        console.warn(
          `body, query_params, and/or headers have overlapping keys → ${overlappingKeys}`
        );
      }
    } else {
      const overlappingKeys = Object.keys(this.queryParams).filter(
        (key) => key in this.headers
      );
      if (overlappingKeys.length > 0) {
        console.warn(
          `query_params and headers have overlapping keys → ${overlappingKeys}`
        );
      }
    }

    if (typeof body === "string") {
      Object.assign(dataJson, { body });
    }

    Object.assign(dataJson, this.headers, this.queryParams);
    this.data = dataJson;
  }

  toString() {
    return `HttpRequest (body=${JSON.stringify(
      this.body
    )}, headers=${JSON.stringify(this.headers)}, query_params=${JSON.stringify(
      this.queryParams
    )}, data=${JSON.stringify(this.data)})`;
  }
}

class HttpResponse {
  statusCode;
  body;
  headers;

  constructor(statusCode = undefined, body = {}, headers = {}) {
    this.statusCode = statusCode || httpStatusCodes.OK;
    this.body = body || {};
    this.headers = headers;
  }

  toString() {
    return `HttpResponse (status_code=${this.statusCode}, body=${JSON.stringify(
      this.body
    )}, headers=${JSON.stringify(this.headers)})`;
  }
}

export { HttpRequest, HttpResponse };
