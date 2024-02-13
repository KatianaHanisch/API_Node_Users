import { ObjectId } from "mongodb";

import { IDeleteUserRepository } from "../../controllers/delete-user/protocols";
import { MongoUser } from "../mongo-protocols";
import { User } from "../../models/user";

import { MongoClient } from "../../database/mongo";

export class MongoDeleteUserRepository implements IDeleteUserRepository {
  async deleteUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Usuario não encontrado");
    }

    const { deletedCount } = await MongoClient.db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Usuario não deletado");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
