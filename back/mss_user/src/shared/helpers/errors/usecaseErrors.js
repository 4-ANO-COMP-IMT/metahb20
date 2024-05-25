import { BaseError } from "./baseError.js";

export class NoItemsFound extends BaseError {
  constructor(message) {
    super(`No items found for ${message}`);
  }
}

export class DuplicatedItem extends BaseError {
  constructor(message) {
    super(`The item already exists for this ${message}`);
  }
}

export class ForbidenAction extends BaseError {
  constructor(message) {
    super(`The action is forbidden for this ${message}`);
  }
}
