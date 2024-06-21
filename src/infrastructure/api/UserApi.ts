import {UserModel} from "@/domain/models/UserModel";
import axios from "axios";
import {AuthModel} from "@/domain/models/Auth";


export class UserApi {
	async fetchUserById(id: string): Promise<UserModel> {
		const response = await fetch(`/api/users/${id}`);
		return await response.json();
	}

	async login(email: string, password: string): Promise<AuthModel> {
		const response = await axios.post('/api/login', {email, password}, {withCredentials: true});
		return response.data;
	}

	async logout(): Promise<void> {
		await axios.post('/api/logout', {}, {withCredentials: true});
	}

	async getUser(): Promise<UserModel | null> {
		try {
			const response = await axios.get('/api/user', {withCredentials: true});
			return response.data;
		} catch (error) {
			return null;
		}
	}
}
