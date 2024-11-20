import { describe, test, expect } from "vitest";
import { UpdateUserUsecase } from "../../../src/modules/updateUser/updateUserUsecase.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";
import { User } from "../../../src/shared/domain/entities/user.js";

describe("Tests for Update User Usecase", () => {
  test("Test UpdateUserUsecase", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const user = await usecase.call(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      "Amy Castro",
      "bizoztu@keta.bw",
      "Crônica",
      "O Senhor dos Aneis"
    );
    const expected = new User(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      "Amy Castro",
      "bizoztu@keta.bw",
      "Crônica",
      "O Senhor dos Aneis"
    );

    expect(user).toBeInstanceOf(User);
    expect(user).toEqual(expected);
  });

  test("Test updateUserUsecase olny one parameter", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);
    const user = await usecase.call(
      "d5135e3e-646a-55e7-a38d-9724159b7f9f",
      "Amy Castro"
    );

    expect(user).toBeInstanceOf(User);
    expect(user.name).toBe("Amy Castro");
    expect(user.email).toBe("nen@pukaon.dj");
  });

  test("Test updateUserUsecase user not found", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);

    await expect(
      usecase.call("d5135e3e-646a-55e7-a38d-9724159b7f9a", "Amy Castro")
    ).rejects.toThrow("No items found for userId");
  });

  test("Test updateUserUsecase userId not valid", async () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);

    await expect(usecase.call("d", "Amy Castro")).rejects.toThrow(
      "Field userId is not valid"
    );
  });
});
