import { createUserPresenter } from "../../../src/modules/createUser/createUserPresenter.js";
import { describe, test, expect } from "vitest";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Create User Presenter Tests", () => {
  test("Test Create User Presenter", async () => {
    const example = {
      name: "Francisco Singleton",
      email: "tu@desbic.vi",
      favoriteGenres: "HQ",
      favoriteBook: "1984",
    };
    const event = new HttpRequest(example);
    const response = await createUserPresenter(event);
    console.log(response);
    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual("the user was created");
  });
});
