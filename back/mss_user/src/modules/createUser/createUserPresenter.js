import { CreateUserController } from "./createUserController.js";
import { CreateUserUsecase } from "./createUserUsecase.js";
import { UserRepositoryMock } from "../../shared/infra/repositories/userRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function createUserPresenter(event, repo) {
  const usecase = new CreateUserUsecase(repo);
  const controller = new CreateUserController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
