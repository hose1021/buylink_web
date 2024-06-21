import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";
import {AuthModel} from "@/models/AuthModel";

export class LoginAction {
	constructor(private userService: UserServiceInterface) {
	}

	async execute(email: string, password: string): Promise<AuthModel> {
		return await this.userService.login(email, password);
	}
}
