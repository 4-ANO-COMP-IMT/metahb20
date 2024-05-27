import { describe, test, expect } from "vitest";
import { CreateUserController } from "../../../src/modules/createUser/createUserController.js";
import { CreateUserUsecase } from "../../../src/modules/createUser/createUserUsecase.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { HttpRequest } from "../../../src/shared/helpers/externalInterfaces/httpModels.js";

describe("TestCreateUserController", () => {
  test("Test Create User Controller", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      email: "guagzow@ilabagane.cf",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(201);
    expect(response?.body["user"]["name"]).toEqual("Jordan Fowler");
    expect(response?.body["user"]["email"]).toEqual("guagzow@ilabagane.cf");
    expect(response?.body["user"]["favoriteGenres"]).toEqual("HQ");
    expect(response?.body["user"]["favoriteBook"]).toEqual("Teste");
    expect(response?.body["message"]).toEqual("the user was created");
  });

  test("Test Create User Controller without name", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      email: "kan@kufuri.sd",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field name is missing");
  });

  test("Test Create User Controller without email", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field email is missing");
  });

  test("Test Create User Controller without favoriteGenres", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      email: "guagzow@ilabagane.cf",
      favoriteBook: "Teste",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field favoriteGenres is missing");
  });

  test("Test Create User Controller without favoriteBook", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      email: "guagzow@ilabagane.cf",
      favoriteGenres: "HQ",
    });

    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field favoriteBook is missing");
  });

  test("Test Create User Controller with wrong type name", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: 1,
      email: "guagzow@ilabagane.cf",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual(
      "Field name isn't in the right type.\n Received: number.\n Expected: string"
    );
  });

  test("Test Create User Controller with wrong type email", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      email: 1,
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual(
      "Field email isn't in the right type.\n Received: number.\n Expected: string"
    );
  });

  test("Test Create User Controller with wrong email not valid", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "Jordan Fowler",
      email: "sdasdasd",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field email is not valid");
  });

  test("Test Create User Controller with wrong name not valid", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new CreateUserUsecase(repo);
    const controller = new CreateUserController(usecase);

    const request = new HttpRequest({
      name: "J",
      email: "guagzow@ilabagane.cf",
      favoriteGenres: "HQ",
      favoriteBook: "Teste",
    });
    const response = await controller.call(request);

    expect(response?.statusCode).toEqual(400);
    expect(response?.body).toEqual("Field name is not valid");
  });
});
