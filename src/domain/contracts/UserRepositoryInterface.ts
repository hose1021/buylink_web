import {UserModel} from "@/domain/models/UserModel";

export interface UserRepositoryInterface {
	getUserById(id: string): Promise<UserModel>;

	saveUser(user: UserModel): Promise<void>;
}
