import { User } from "../../domain/entities/user.js";
import { GENRES } from "../../domain/enums/genresEnum.js";

export class UserRepositoryMock {
  constructor() {
    this.users = [
      new User(
        "d5135e3e-646a-55e7-a38d-9724159b7f9f",
        "Beulah Watkins",
        "nen@pukaon.dj",
        GENRES.CONTO,
        "1984"
      ),

      new User(
        "93bc6ada-c0d1-7054-66ab-e17414c48ae3",
        "Mildred McGee",
        "edivi@igsomzi.nc",
        GENRES.TERROR,
        "Dom Casmurro"
      ),

      new User(
        "11ee92f3-07f6-5b5b-a652-ebe2c276e560",
        "Jose Hopkins",
        "ejsoga@runih.gu",
        GENRES.CRONICA,
        "O Senhor dos aneis"
      ),

      new User(
        "46bf72c5-dec3-58c6-89da-6538628d4acb",
        "Trevor Meyer",
        "cusira@hare.gb",
        GENRES.CRONICA,
        "A Revolução dos bichos"
      ),
    ];
  }

  async createUser(user) {
    this.users.push(user);
    return user;
  }

  async getUser(id) {
    const user = this.users.find((user) => user.userId === id);
    return user || null;
  }

  async deleteUser(id) {
    const user = this.users.find((user) => user.userId === id);
    if (user) {
      this.users = this.users.filter((user) => user.userId !== id);
      return user;
    }
    return null;
  }

  async updateUser(
    userId,
    newName = null,
    newEmail = null,
    newFavoriteGenres = null,
    newFavoriteBook = null
  ) {
    const user = this.users.find((user) => user.userId === userId);
    if (!user) return null;
    if (newName) user.name = newName;
    if (newEmail) user.email = newEmail;
    if (newFavoriteGenres) user.favoriteGenres = newFavoriteGenres;
    if (newFavoriteBook) user.favoriteBook = newFavoriteBook;
    return user;
  }
}
