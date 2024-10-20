import { BaseError } from "./baseError.js";

export class MissingParameters extends BaseError {
  constructor(message) {
    super(`Field ${message} is missing`);
  }
}

export class WrongTypeParameter extends BaseError {
  constructor(fieldName, fieldTypeExpected, fieldTypeReceived) {
    super(
      `Field ${fieldName} isn't in the right type.\n Received: ${fieldTypeReceived}.\n Expected: ${fieldTypeExpected}`
    );
  }
}
