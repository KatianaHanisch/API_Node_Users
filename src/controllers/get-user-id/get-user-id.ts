import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IGetUserIdRepository } from "./protocols";

export class GetUserIdController implements IController {
  constructor(private readonly getUserIdRepository: IGetUserIdRepository) {}
  async handle(
    httpResquest: HttpRequest<User>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpResquest?.params?.id;

      if (!id) {
        return badRequest("Usuário não encontrado");
      }

      const user = await this.getUserIdRepository.getUserId(id);

      return ok<User>(user);
    } catch (error) {
      return serverError("Ocorreu um erro");
    }
  }
}
