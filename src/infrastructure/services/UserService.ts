import {UserModel} from "@/infrastructure/models/UserModel";
import {AuthModel} from "@/infrastructure/models/AuthModel";
import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";
import {UserRepositoryInterface} from "@/infrastructure/repositories/contracts/UserRepositoryInterface";
import {UserRepository} from "@/infrastructure/repositories/UserRepository";

export class UserService implements UserServiceInterface {
	private userRepository: UserRepositoryInterface;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async getUserById(id: string): Promise<UserModel> {
		return await this.userRepository.getUserById(id);
	}

	async login(email: string, password: string): Promise<AuthModel> {
		return await this.userRepository.login(email, password);
	}

	async register(email: string, password: string): Promise<AuthModel> {
		return await this.userRepository.register(email, password);
	}

	async logout(): Promise<void> {
		await this.userRepository.logout();
	}

	async getUser(): Promise<UserModel | null> {
		return await this.userRepository.getUser();
	}
}

