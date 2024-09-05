import { getUserPresenter } from "../../../src/modules/getUser/getUserPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { User } from "../../../src/shared/domain/entities/user.js";

describe("Create User Presenter Tests", () => {
  test("Test Create User Presenter", async () => {
    const example = {
      userId: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
    };
    const repo = new UserRepositoryMock();
    const event = new HttpRequest(example);
    const response = await getUserPresenter(event, repo);
    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("the user was retrieved");
    expect(response.body["user"]["name"]).toEqual("Beulah Watkins");
    expect(response.body["user"]["email"]).toEqual("nen@pukaon.dj");
    expect(response.body["user"]["favoriteGenres"]).toEqual("Conto");
    expect(response.body["user"]["favoriteBook"]).toEqual("1984");
  });
});
