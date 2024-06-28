import UpdateUserController from "./updateUserController.js";
import { UpdateUserUsecase } from "./updateUserUsecase.js";
import { UserRepositoryMock } from "../../shared/infra/repositories/userRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new UserRepositoryMock();
const usecase = new UpdateUserUsecase(repo);
const controller = new UpdateUserController(usecase);

export async function updateUserPresenter(event) {
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
