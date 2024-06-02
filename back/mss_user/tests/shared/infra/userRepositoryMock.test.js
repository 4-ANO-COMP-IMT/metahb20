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
});
