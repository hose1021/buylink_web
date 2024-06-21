import {UserModel} from "@/infrastructure/models/UserModel";
import {AuthModel} from "@/infrastructure/models/AuthModel";
import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";
import {UserRepositoryInterface} from "@/infrastructure/repositories/contracts/UserRepositoryInterface";

export class UserService implements UserServiceInterface {
	constructor(private userRepositoryInterface: UserRepositoryInterface) {
	}

	async getUserById(id: string): Promise<UserModel> {
		return await this.userRepositoryInterface.getUserById(id);
	}

	async login(email: string, password: string): Promise<AuthModel> {
		return await this.userRepositoryInterface.login(email, password);
	}

	async logout(): Promise<void> {
		await this.userRepositoryInterface.logout();
	}

	async getUser(): Promise<UserModel | null> {
		return await this.userRepositoryInterface.getUser();
	}
}

