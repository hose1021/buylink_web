import {UserModel} from "@/infrastructure/models/UserModel";
import {AuthModel} from "@/infrastructure/models/AuthModel";
import {UserRepositoryInterface} from "@/infrastructure/repositories/contracts/UserRepositoryInterface";
import {ApiServiceInterface} from "@/infrastructure/services/contracts/ApiServiceInterface";
import {ApiService} from "@/infrastructure/services/ApiService";

export class UserRepository implements UserRepositoryInterface {
	private apiService: ApiServiceInterface;

	constructor() {
		this.apiService = new ApiService().create();
	}

	async getUserById(id: string, auth = true): Promise<UserModel> {
		const response = await this.apiService.get(`users/${id}`, auth);
		return await response.json();
	}

	async login(email: string, password: string): Promise<AuthModel> {
		const response = await this.apiService.post('/login', {email, password});
		return response.data;
	}

	async register(email: string, password: string): Promise<AuthModel> {
		const response = await this.apiService.post('/register', {email, password});
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
