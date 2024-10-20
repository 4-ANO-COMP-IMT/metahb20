import { CreateUserUsecase } from "../../../src/modules/createUser/createUserUsecase.js";
import { User } from "../../../src/shared/domain/entities/user.js";
import { GENRES } from "../../../src/shared/domain/enums/genresEnum.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { expect, test, describe } from "vitest";

describe("Create User Usecase Tests", () => {
  test("Test Create User Usecase", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const user = await usecase.call(
      "Virgie Schwartz",
      "sar@anuahiheg.lv",
      GENRES.HQ,
      "Guardiões da Galáxia"
    );

    expect(user.name).toEqual("Virgie Schwartz");
    expect(user.email).toEqual("sar@anuahiheg.lv");
    expect(user.favoriteGenres).toEqual(GENRES.HQ);
  });
});
