import { GetUserController } from "./getUserController.js";
import { GetUserUsecase } from "./getUserUsecase.js";
import { UserRepositoryMock } from "../../shared/infra/repositories/userRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new UserRepositoryMock();
const usecase = new GetUserUsecase(repo);
const controller = new GetUserController(usecase);

export async function getUserPresenter(event) {
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
