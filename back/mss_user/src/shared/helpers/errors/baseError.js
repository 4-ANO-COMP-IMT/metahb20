export class BaseError extends Error {
  #message;

  constructor(message) {
    super(message);
    this.#message = message;
  }

  get message() {
    return this.#message;
  }
}
