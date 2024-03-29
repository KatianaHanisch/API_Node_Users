import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user/protocols";
import { User } from "../../models/user";
import { MongoUser } from "../mongo-protocols";

import { MongoClient } from "../../database/mongo";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("Usuário não foi criado");
    }

    return MongoClient.convertMongoUserToUser(user);
  }
}
