import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { expect, test, describe } from "vitest";
import { User } from "../../../src/shared/domain/entities/user";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";

const repo = new UserRepositoryMock();

describe("Test user repository", () => {
  test("Test Create User", async () => {
    const user = new User(
      "c0712271-fc09-5658-9104-7a34961ade86",
      "Fred Day",
      "poki@razjuh.st",
      GENRES.DRAMA,
      "Phasma"
    );
    const currentLength = repo.users.length;
    const newUser = await repo.createUser(user);
    const newLegnth = repo.users.length;

    expect(newUser).toBeInstanceOf(User);
    expect(newUser).toEqual(user);
    expect(newLegnth).toEqual(currentLength + 1);
  });

  test("Test getUser", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9f";

    const user = await repo.getUser(id);

    expect(user.name).toEqual("Beulah Watkins");
  });

  test("Test getUser user not found", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9a";

    const user = await repo.getUser(id);

    expect(user).toBeNull;
  });

  test("Test deleteUser", async () => {
    const id = "46bf72c5-dec3-58c6-89da-6538628d4acb";
    const currentLength = repo.users.length;

    const user = await repo.deleteUser(id);
    const newLegnth = repo.users.length;

    expect(user.name).toEqual("Trevor Meyer");
    expect(newLegnth).toEqual(currentLength - 1);
    expect(await repo.getUser(id)).toBeNull();
  });

  test("Test deleteUser not found", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9a";
    const currentLength = repo.users.length;

    const user = await repo.deleteUser(id);
    const newLegnth = repo.users.length;

    expect(user).toBeNull();
    expect(newLegnth).toEqual(currentLength);
  });

  test("Test updateUser", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9f";
    const newName = "Beulah Watkins Updated";
    const newEmail = "unmav@iwnar.fr";
    const newFavoriteGenres = GENRES.DRAMA;
    const newFavoriteBook = "The Lord of the Rings";

    const user = await repo.updateUser(
      id,
      newName,
      newEmail,
      newFavoriteGenres,
      newFavoriteBook
    );

    expect(user.name).toEqual(newName);
    expect(user.email).toEqual(newEmail);
    expect(user.favoriteGenres).toEqual(newFavoriteGenres);
    expect(user.favoriteBook).toEqual(newFavoriteBook);
  });

  test("Test updateUser only email", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9f";
    const email = "newemail@email.com";

    const user = await repo.updateUser(id, null, email);

    expect(user.email).toEqual(email);
  });

  test("Test updateUser not found", async () => {
    const id = "d5135e3e-646a-55e7-a38d-9724159b7f9a";
    const newName = "Beulah Watkins Updated";

    const user = await repo.updateUser(id, newName);

    expect(user).toBeNull();
  });
});
