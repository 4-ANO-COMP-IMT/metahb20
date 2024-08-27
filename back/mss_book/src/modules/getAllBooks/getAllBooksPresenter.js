import { GetAllBooksUsecase } from "./getAllBooksUsecase.js";
import { GetAllBooksController } from "./getAllBooksController.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function getAllBooksPresenter(event, repo) {
  const usecase = new GetAllBooksUsecase(repo);
  const controller = new GetAllBooksController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
