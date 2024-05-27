import { CreateUserController } from "./createUserController.js";
import { CreateUserUsecase } from "./createUserUsecase.js";
import { UserRepositoryMock } from "../../shared/infra/repositories/userRepositoryMock.js";
import {
  HttpRequest,
  HttpResponse,
} from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new UserRepositoryMock();
const usecase = new CreateUserUsecase(repo);
const controller = new CreateUserController(usecase);

export async function createUserPresenter(event) {
  const httpRequest = new HttpRequest(event);
  const response = await controller.call(httpRequest);
  const httpResponse = new HttpResponse(response.statusCode, response.body);

  return httpResponse;
}
