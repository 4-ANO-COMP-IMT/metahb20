import { updateUserPresenter } from "../../../src/modules/updateUser/updateUserPresenter.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";
import { describe, test, expect } from "vitest";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";

describe("Tests for UpdateUser Presenter", () => {
  test("Test UpdateUser Presenter", async () => {
    const example = {
      userId: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      new_name: "Lucas Gutierrez",
      new_email: "ofwidige@va.gt",
      new_genre: "Conto",
      new_favoriteBook: "Phasma",
    };
    const repo = new UserRepositoryMock();
    const event = new HttpRequest(example);
    const response = await updateUserPresenter(event, repo);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("the user was updated");
    expect(response.body["user"]["userId"]).toBe(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(response.body["user"]["name"]).toBe("Lucas Gutierrez");
    expect(response.body["user"]["email"]).toBe("ofwidige@va.gt");
    expect(response.body["user"]["favoriteGenres"]).toBe("Conto");
    expect(response.body["user"]["favoriteBook"]).toBe("Phasma");
  });
});
