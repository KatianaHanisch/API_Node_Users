import { ObjectId } from "mongodb";

import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "../../controllers/update-user/protocols";
import { MongoUser } from "../mongo-protocols";
import { User } from "../../models/user";

import { MongoClient } from "../../database/mongo";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Não foi possível atualizar o usuário");
    }

    return MongoClient.convertMongoUserToUser(user);
  }
}
