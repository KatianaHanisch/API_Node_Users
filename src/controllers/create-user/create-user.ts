import validator from "validator";

import { User } from "../../models/user";

import { HttpResponse, HttpRequest, IController } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";

import { badRequest, created, serverError } from "../helpers";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Campo ${field} é obrigatório`);
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequest("Email inválido");
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return created<User>(user);
    } catch (error) {
      return serverError("Ocorreu um erro");
    }
  }
}
