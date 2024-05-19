import { BaseError } from "./baseError";

export class EntityError extends BaseError {
  constructor(message) {
    super(`Field ${message} is not valid`);
  }
}
