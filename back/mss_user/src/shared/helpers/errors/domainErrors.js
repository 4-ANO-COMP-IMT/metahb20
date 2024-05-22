import { BaseError } from "./baseError.js";

export class EntityError extends BaseError {
  constructor(message) {
    super(`Field ${message} is not valid`);
  }
}
