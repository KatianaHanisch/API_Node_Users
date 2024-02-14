import { ObjectId } from "mongodb";
import { IGetUserIdRepository } from "../../controllers/get-user-id/protocols";
import { MongoClient, MongoUser } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUserIdRepository implements IGetUserIdRepository {
  async getUserId(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Usuario não encontrado");
    }

    return MongoClient.convertMongoUserToUser(user);
  }
}
