import { User } from "../../models/user";
import { badRequest, serverError, ok } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async handle(
    httpRequest: HttpRequest<User>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Usuário não encontrado");
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return ok<User>(user);
    } catch (error) {
      return serverError("Ocorreu um erro");
    }
  }
}
