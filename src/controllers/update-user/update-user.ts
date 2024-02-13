import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Ocorreu um erro");
      }

      if (!id) {
        return badRequest("Não foi possivele encontrar o id");
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldIsNotAllowedUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFieldIsNotAllowedUpdate) {
        return badRequest("Alguns campos recebidos não são permitidos");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user);
    } catch (error) {
      return serverError("Ocorreu um erro");
    }
  }
}
