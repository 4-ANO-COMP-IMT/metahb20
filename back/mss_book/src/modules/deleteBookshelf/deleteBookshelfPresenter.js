import { DeleteBookshelfController } from "./deleteBookshelfController.js";
import { DeleteBookshelfUsecase } from "./deleteBookshelfUsecase.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function deleteBookshelfPresenter(event, repo) {
  const usecase = new DeleteBookshelfUsecase(repo);
  const controller = new DeleteBookshelfController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
