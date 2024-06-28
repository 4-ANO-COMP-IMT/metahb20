import { CreateBookController } from "./createBookController.js";
import { CreateBookUsecase } from "./createBookUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new BookRepositoryMock();
const usecase = new CreateBookUsecase(repo);
const controller = new CreateBookController(usecase);

export async function createBookPresenter(event) {
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
