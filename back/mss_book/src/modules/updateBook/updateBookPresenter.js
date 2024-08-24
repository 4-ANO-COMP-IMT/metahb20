import { UpdateBookController } from "./updateBookController.js";
import { UpdateBookUsecase } from "./updateBookUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function updateBookPresenter(event, repo) {
  const usecase = new UpdateBookUsecase(repo);
  const controller = new UpdateBookController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
