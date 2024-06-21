import {UserModel} from "@/domain/models/UserModel";
import {AuthModel} from "@/domain/models/AuthModel";

export interface UserServiceInterface {
	getUserById(id: string): Promise<UserModel>;

	login(email: string, password: string): Promise<AuthModel>;

	logout(): Promise<void>;

	getUser(): Promise<UserModel | null>;
}
