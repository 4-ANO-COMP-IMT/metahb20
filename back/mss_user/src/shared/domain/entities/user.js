import { EntityError } from "../../helpers/errors/domainErrors.js";
import { GENRES } from "../enums/genresEnum.js";

export class User {
  userId;
  name;
  email;
  favoriteGenres;
  favoriteBook;
  static USERID_LENGTH = 36;
  static NAME_MIN_LENGTH = 2;
  static NAME_MAX_LENGTH = 100; 
  static EMAIL_MAX_LENGTH = 50;
  static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(userId, name, email, favoriteGenres, favoriteBook) {
    if (!User.validateUserId(userId)) {
      throw new EntityError("userId");
    }
    this.userId = userId;

    if (!User.validateName(name)) {
      throw new EntityError("name");
    }
    this.name = name;

    if (!User.validateEmail(email)) {
      throw new EntityError("email");
    }
    this.email = email;

    if (!User.validateFavoriteGenres(favoriteGenres)) {
      throw new EntityError("favoriteGenres");
    }
    this.favoriteGenres = favoriteGenres;

    if (
      favoriteBook !== undefined &&
      !User.validateFavoriteBook(favoriteBook)
    ) {
      throw new EntityError("favoriteBook");
    }
    this.favoriteBook = favoriteBook;
  }

  static validateUserId(id) {
    if (!id) return false;
    else if (typeof id !== "string") return false;
    else if (id.length !== User.USERID_LENGTH) return false;
    else return true;
  }

  static validateName(name) {
    if (!name) return false;
    else if (typeof name !== "string") return false;
    else if (
      name.length < User.NAME_MIN_LENGTH ||
      name.length > User.NAME_MAX_LENGTH
    )
      return false;
    else return true;
  }

  static validateEmail(email) {
    if (!email) return false;
    else if (typeof email !== "string") return false;
    else if (email.length > User.EMAIL_MAX_LENGTH) return false;
    else if (!User.emailRegex.test(email)) return false;
    else return true;
  }

  static validateFavoriteGenres(favoriteGenres) {
    if (typeof favoriteGenres !== "string") return false;
    else if (!Object.values(GENRES).includes(favoriteGenres)) return false;
    else return true;
  }

  static validateFavoriteBook(favoriteBook) {
    if (typeof favoriteBook !== "string") return false;
    else return true; // Ou outras validações específicas que você queira
  }

  toJSON() {
    return {
      userId: this.userId,
      name: this.name,
      email: this.email,
      favoriteGenres: this.favoriteGenres,
      favoriteBook: this.favoriteBook,
    };
  }

  static fromJson(json) {
    return new User(
      json.userId,
      json.name,
      json.email,
      json.favoriteGenres,
      json.favoriteBook
    );
  }
}
