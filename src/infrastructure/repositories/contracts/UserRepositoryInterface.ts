import {UserModel} from "@/infrastructure/models/UserModel";
import {AuthModel} from "@/infrastructure/models/AuthModel";

export interface UserRepositoryInterface {
	getUserById(id: string, auth?: boolean): Promise<UserModel>;

	login(email: string, password: string): Promise<AuthModel>;

	logout(): Promise<void>;

	getUser(): Promise<UserModel | null>;
}
