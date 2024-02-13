import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        fistName: "Katiana",
        lastName: "Hanisch",
        email: "exemplo@gmail.com",
        password: "123",
      },
    ];
  }
}
