import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoUser } from "../mongo-protocols";
import { User } from "../../models/user";

import { MongoClient } from "../../database/mongo";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
