import { GetUserUsecase } from "../../../src/modules/getUser/getUserUsecase.js";
import { describe, test, expect } from "vitest";
import { User } from "../../../src/shared/domain/entities/user.js";
import { UserRepositoryMock } from "../../../src/shared/infra/repositories/userRepositoryMock.js";

const repo = new UserRepositoryMock();

describe("Get User Usecase Tests", () => {
  test("Test getUser Usecase", async () => {
    const id = "93bc6ada-c0d1-7054-66ab-e17414c48ae3";
    const usecase = new GetUserUsecase(repo);

    const user = await usecase.call(id);

    expect(user).toBeInstanceOf(User);
    expect(user.name).toEqual("Mildred McGee");
  });

  test("Test getUser No Items Found", async () => {
    const id = "93bc6ada-c0d1-7054-66ab-e17414c48ae4";
    const usecase = new GetUserUsecase(repo);

    await expect(usecase.call(id)).rejects.toThrowError(
      "No items found for userId"
    );
  });

  test("Test getUser invalid userId", async () => {
    const id = "12";
    const usecase = new GetUserUsecase(repo);

    await expect(usecase.call(id)).rejects.toThrowError(
      "Field userId is not valid"
    );
  });
});
