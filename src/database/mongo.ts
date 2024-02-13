import { MongoClient as Mongo, Db, ObjectId } from "mongodb";
import { User } from "../models/user";

export interface MongoUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL!;
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    const client = new Mongo(url, { auth: { username, password } });
    const db = client.db("users-db");

    this.client = client;
    this.db = db;

    console.log("Connected to Mongo");
  },

  async convertMongoUserToUser(mongoUser: MongoUser): Promise<User> {
    const { _id, ...rest } = mongoUser;
    return { id: _id.toHexString(), ...rest };
  },
};
