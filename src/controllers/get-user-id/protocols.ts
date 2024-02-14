import { User } from "../../models/user";

export interface IGetUserIdRepository {
  getUserId(id: string): Promise<User>;
}
