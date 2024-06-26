import {UserModel} from "@/infrastructure/models/UserModel";
import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";
import {UserService} from "@/infrastructure/services/UserService";

export class GetUserByIdAction {
	private userService: UserServiceInterface;

	constructor() {
		this.userService = new UserService();
	}

	async execute(id: string): Promise<UserModel> {
		return await this.userService.getUserById(id);
	}
}
