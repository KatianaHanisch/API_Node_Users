import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  IUpdateUserController,
  IUpdateUserRepository,
  UpdateUserParams,
} from "./protocols";

export class UpdateUserController implements IUpdateUserController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return {
          statusCode: 400,
          body: "Não foi possivele encontrar o id",
        };
      }

      const allowedFieldsToUpdate: (keyof UpdateUserParams)[] = [
        "fistName",
        "lastName",
        "password",
      ];

      const someFieldIsNotAllowedUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUserParams)
      );

      if (someFieldIsNotAllowedUpdate) {
        return {
          statusCode: 400,
          body: "Alguns campos recebidos não são permitidos",
        };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Ocorreu um erro",
      };
    }
  }
}
