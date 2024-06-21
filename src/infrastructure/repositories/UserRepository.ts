import {UserModel} from "@/models/UserModel";
import {AuthModel} from "@/models/AuthModel";
import {UserRepositoryInterface} from "@/infrastructure/repositories/contracts/UserRepositoryInterface";
import {ApiServiceInterface} from "@/infrastructure/services/contracts/ApiServiceInterface";

export class UserRepository implements UserRepositoryInterface {
	private apiService: ApiServiceInterface;

	constructor(apiService: ApiServiceInterface) {
		this.apiService = apiService.create();
	}

	async getUserById(id: string, auth = true): Promise<UserModel> {
		const response = await this.apiService.get(`users/${id}`, auth);
		return await response.json();
	}

	async login(email: string, password: string): Promise<AuthModel> {
		const response = await this.apiService.post('/login', {email, password});
		return response.data;
	}

	async logout(): Promise<void> {
		await this.apiService.post('logout', {}, true);
	}

	async getUser(): Promise<UserModel | null> {
		try {
			const response = await this.apiService.get('user');
			return response.data;
		} catch (error) {
			return null;
		}
	}
}
