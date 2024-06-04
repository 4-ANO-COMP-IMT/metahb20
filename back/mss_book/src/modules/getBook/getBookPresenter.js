import { GetBookController } from "./getBookController.js";
import { GetBookUsecase } from "./getBookUsecase.js";
import { BookRepositoryMock } from "../../shared/infra/repositories/bookRepositoryMock.js";
import { HttpResponse } from "../../shared/helpers/externalInterfaces/httpModels.js";

const repo = new BookRepositoryMock();
const usecase = new GetBookUsecase(repo);
const controller = new GetBookController(usecase);

export async function getBookPresenter(event) {
  const response = await controller.call(event);
  const httpResponse = new HttpResponse(response?.statusCode, response?.body);

  return httpResponse;
}
