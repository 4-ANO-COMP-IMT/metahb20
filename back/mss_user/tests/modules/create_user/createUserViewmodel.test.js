import { CreateUserViewmodel } from "../../../src/modules/createUser/createUserViemmodel.js";
import { describe, test, expect } from "vitest";
import { User } from "../../../src/shared/domain/entities/user.js";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";

describe("Test Create User Viewmodel", () => {
  test("Test CreateUserViewmodel", () => {
    const user = new User(
      "499a7bca-8e89-5fa5-a5ad-95661a444e23",
      "Johnny Wood",
      "ca@toedlek.hm",
      GENRES.CONTO,
      "Conectadas"
    );
    console.log(user);
    const userViewModel = new CreateUserViewmodel(user).toJSON();
    console.log(userViewModel);

    expect(userViewModel).toEqual({
      user: {
        userId: "499a7bca-8e89-5fa5-a5ad-95661a444e23",
        name: "Johnny Wood",
        email: "ca@toedlek.hm",
        favoriteGenres: "Conto",
        favoriteBook: "Conectadas",
      },
      message: "the user was created",
    });
  });
});
