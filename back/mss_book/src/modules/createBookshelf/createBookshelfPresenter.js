import { CreateBookshelfUsecase } from "./createBookshelfUsecase.js";
import { CreateBookshelfController } from "./createBookshelfController.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function createBookshelfPresenter(event, repo) {
  const usecase = new CreateBookshelfUsecase(repo);
  const controller = new CreateBookshelfController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
