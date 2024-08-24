import { DeleteBookController } from "./deleteBookController.js";
import { DeleteBookUsecase } from "./deleteBookUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function deleteBookPresenter(event, repo) {
  const usecase = new DeleteBookUsecase(repo);
  const controller = new DeleteBookController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
