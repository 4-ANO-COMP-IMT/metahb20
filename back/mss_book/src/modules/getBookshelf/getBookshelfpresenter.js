import { GetBookshelfController } from "./getBooksheflfController.js";
import { GetBookshelfUsecase } from "./getBookshelfUsecase.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function getBookshelfPresenter(event, repo) {
  const usecase = new GetBookshelfUsecase(repo);
  const controller = new GetBookshelfController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
