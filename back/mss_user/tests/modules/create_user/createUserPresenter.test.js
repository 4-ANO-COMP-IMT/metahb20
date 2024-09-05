import { createUserPresenter } from "../../../src/modules/createUser/createUserPresenter.js";
import { describe, test, expect } from "vitest";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";

describe("Create User Presenter Tests", () => {
  test("Test Create User Presenter", async () => {
    const example = {
      name: "Francisco Singleton",
      email: "tu@desbic.vi",
      favoriteGenres: "HQ",
      favoriteBook: "1984",
    };
    const repo = new UserRepositoryMock();
    const event = new HttpRequest(example);
    const response = await createUserPresenter(event, repo);
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual("the user was created");
  });
});
