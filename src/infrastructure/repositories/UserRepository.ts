import {UserRepositoryInterface} from "@/domain/contracts/UserRepositoryInterface";
import {UserApi} from "@/infrastructure/api/UserApi";
import {UserModel} from "@/domain/models/UserModel";
import {AuthModel} from "@/domain/models/Auth";

export class UserRepository implements UserRepositoryInterface {
	constructor(private userApi: UserApi) {
	}

	async getUserById(id: string): Promise<UserModel> {
		return await this.userApi.fetchUserById(id);
	}

	async saveUser(user: UserModel): Promise<void> {
		// Implementation for saving user
	}

	async login(email: string, password: string): Promise<AuthModel> {
		return await this.userApi.login(email, password);
	}

	async logout(): Promise<void> {
		await this.userApi.logout();
	}

	async getUser(): Promise<UserModel | null> {
		return await this.userApi.getUser();
	}
}
