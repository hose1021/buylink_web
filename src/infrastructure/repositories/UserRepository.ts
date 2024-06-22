import {UserModel} from "@/infrastructure/models/UserModel";
import {AuthModel} from "@/infrastructure/models/AuthModel";
import {UserRepositoryInterface} from "@/infrastructure/repositories/contracts/UserRepositoryInterface";
import api from "@/utils/api";

export class UserRepository implements UserRepositoryInterface {
	constructor() {
	}

	async getUserById(id: string, auth = true): Promise<UserModel> {
		return await api.get<UserModel>(`users/${id}`, auth);
	}

	async login(email: string, password: string): Promise<AuthModel> {
		return await api.post<AuthModel>('/login', {email, password});
	}

	async register(email: string, password: string): Promise<AuthModel> {
		return await api.post('/register', {email, password});
	}

	async logout(): Promise<void> {
		await api.post('logout', {}, true);
	}

	async getUser(): Promise<UserModel | null> {
		try {
			return await api.get<UserModel>('user');
		} catch (error) {
			return null;
		}
	}
}
