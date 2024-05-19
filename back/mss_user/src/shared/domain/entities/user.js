import { EntityError } from "../../helpers/errors/domainErrors";
import { GENRES } from "../enums/genresEnum";

export class User {
  userId;
  name;
  email;
  favoriteGenres;
  favoriteBook;
  friends;
  static USERID_LENGTH = 32;
  static NAME_MIN_LENGTH = 2;
  static NAME_MAX_LENGTH = 100; // Corrigi o valor para algo mais razoável
  static EMAIL_MAX_LENGTH = 100;
  static emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(userId, name, email, favoriteGenres, favoriteBook, friends) {
    if (!User.validateUserId(userId)) {
      throw new EntityError("UserId");
    }
    this.userId = userId;

    if (!User.validateName(name)) {
      throw new EntityError("Name");
    }
    this.name = name;

    if (!User.validateEmail(email)) {
      throw new EntityError("Email");
    }
    this.email = email;

    if (!User.validateFavoriteGenres(favoriteGenres)) {
      throw new EntityError("FavoriteGenres");
    }
    this.favoriteGenres = favoriteGenres;

    if (
      favoriteBook !== undefined &&
      !User.validateFavoriteBook(favoriteBook)
    ) {
      throw new EntityError("FavoriteBook");
    }
    this.favoriteBook = favoriteBook;

    if (friends !== undefined && !Array.isArray(friends)) {
      throw new EntityError("Friends");
    }
    this.friends = friends;
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
}
