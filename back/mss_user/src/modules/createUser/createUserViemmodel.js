class UserViewmodel {
  userId;
  name;
  email;
  favoriteGenres;
  favoriteBook;

  constructor(user) {
    this.userId = user.userId;
    this.name = user.name;
    this.email = user.email;
    this.favoriteGenres = user.favoriteGenres;
    this.favoriteBook = user.favoriteBook;
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
}

export class CreateUserViewmodel {
  constructor(user) {
    this.user = user;
  }

  toJSON() {
    return {
      user: new UserViewmodel(this.user).toJSON(),
      message: "the user was created",
    };
  }
}
