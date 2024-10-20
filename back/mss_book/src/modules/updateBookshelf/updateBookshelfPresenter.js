import { UpdateBookshelfController } from "./updateBookshelfController.js";
import { UpdateBookshelfUsecase } from "./updateBookshelfUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

export async function updateBookshelfPresenter(event, repo) {
  const usecase = new UpdateBookshelfUsecase(repo);
  const controller = new UpdateBookshelfController(usecase);
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
