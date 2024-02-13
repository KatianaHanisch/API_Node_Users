import { User } from "../../models/user";

import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

import { serverError, ok } from "../helpers";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (error) {
      return serverError("Ocorreu um erro");
    }
  }
}
