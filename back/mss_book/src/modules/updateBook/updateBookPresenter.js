import { UpdateBookController } from "./updateBookController.js";
import { UpdateBookUsecase } from "./updateBookUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new BookRepositoryMock();
const usecase = new UpdateBookUsecase(repo);
const controller = new UpdateBookController(usecase);

export async function updateBookPresenter(event) {
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
