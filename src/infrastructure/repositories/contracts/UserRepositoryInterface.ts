import {UserModel} from "@/models/UserModel";
import {AuthModel} from "@/models/AuthModel";

export interface UserRepositoryInterface {
	getUserById(id: string, auth?: boolean): Promise<UserModel>;

	login(email: string, password: string): Promise<AuthModel>;

	logout(): Promise<void>;

	getUser(): Promise<UserModel | null>;
}
