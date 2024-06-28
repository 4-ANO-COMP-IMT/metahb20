import { describe, test, expect } from "vitest";
import UpdateUserController from "../../../src/modules/updateUser/updateUserController.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { UpdateUserUsecase } from "../../../src/modules/updateUser/updateUserUsecase.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("Tests for UpdateUser Controller", () => {
  test("Test UpdateUser Controller", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const controller = new UpdateUserController(usecase);

    const request = new HttpRequest({
      userId: "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      new_name: "Lucas Gutierrez",
      new_email: "iwo@ned.io",
      new_genre: "Conto",
      new_favoriteBook: "Phasma",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(200);
    expect(response?.body["message"]).toEqual("the user was updated");
    expect(response?.body["user"]["userId"]).toBe(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f"
    );
    expect(response?.body["user"]["name"]).toBe("Lucas Gutierrez");
    expect(response?.body["user"]["email"]).toBe("iwo@ned.io");
    expect(response?.body["user"]["favoriteGenres"]).toBe("Conto");
    expect(response?.body["user"]["favoriteBook"]).toBe("Phasma");
  });

  test("Test UpdateUser Controller missing userId", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const controller = new UpdateUserController(usecase);

    const request = new HttpRequest({
      new_name: "Lucas Gutierrez",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field userId is missing");
  });

  test("Test UpdateUser Controller userId not valid", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const controller = new UpdateUserController(usecase);

    const request = new HttpRequest({
      userId: "d5135e3e",
      new_name: "Lucas Gutierrez",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field userId is not valid");
  });

  test("Test UpdateUserController user not found", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const controller = new UpdateUserController(usecase);

    const request = new HttpRequest({
      userId: "792c78c2-a278-54ff-aeb1-c8f790bd84b1",
      new_name: "Lucas Gutierrez",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(404);
    expect(response?.body).toEqual("No items found for userId");
  });
});
