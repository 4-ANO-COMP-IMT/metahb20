import { GENRES } from "../../shared/domain/enums/genresEnum.js";

class UserViewmodel {
  userId;
  name;
  email;
  favoriteGenres;
  favoriteBooks;

  constructor(user) {
    this.userId = user.userId;
    this.name = user.name;
    this.email = user.email;
    this.favoriteGenres = user.favoriteGenres;
    this.favoriteBooks = user.favoriteBooks;
  }

  toJSON() {
    return {
      userId: self.userId,
      name: self.name,
      email: self.email,
      favoriteGenres: self.favoriteGenres,
      favoriteBooks: self.favoriteBooks,
    };
  }
}

class CreateUserViewmodel {
  constructor(user) {
    this.user = user;
  }

  toJSON() {
    return {
      user: UserViewmodel(user).toJSON(),
      message: "the user was created",
    };
  }
}
