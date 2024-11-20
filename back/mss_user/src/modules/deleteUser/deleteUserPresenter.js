import { DeleteUserController } from "./deleteUserController.js";
import { DeleteUserUsecase } from "./deleteUserUsecase.js";
import { UserRepositoryMock } from "../../shared/infra/repositories/userRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function deleteUserPresenter(event, repo) {
  const usecase = new DeleteUserUsecase(repo);
  const controller = new DeleteUserController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
