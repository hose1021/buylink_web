import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";
import {AuthModel} from "@/infrastructure/models/AuthModel";
import {UserService} from "@/infrastructure/services/UserService";

export class RegisterAction {
	private userService: UserServiceInterface;

	constructor() {
		this.userService = new UserService();
	}

	async execute(email: string, password: string): Promise<AuthModel> {
		return await this.userService.register(email, password);
	}
}
