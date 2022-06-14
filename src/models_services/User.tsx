import { GET, POST, PUT, DELETE } from "../common/ServiceUtility";

export default class User {
  id: string;
  fullName: string;
  mobile: string;
  age: number;
  email: string;

  constructor(
    id: string = "",
    fullName: string = "",
    mobile: string = "",
    age: number = 0,
    email: string = ""
  ) {
    this.id = id;
    this.fullName = fullName;
    this.mobile = mobile;
    this.age = age;
    this.email = email;
  }

  public static async getAllUsers(): Promise<User[]> {
    return GET("users");
  }

  public static async getUser(id: string): Promise<User> {
    return GET("users/" + id);
  }

  public static async saveUser(model: User): Promise<User> {
    if (model.id) {
      return PUT("users/" + model.id, model);
    }
    return POST("users", model);
  }

  public static async deleteUser(id: string): Promise<User> {
    return DELETE("users/" + id);
  }
}
