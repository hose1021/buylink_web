import {UserModel} from "@/models/UserModel";
import {UserServiceInterface} from "@/infrastructure/services/contracts/UserServiceInterface";

export class GetUserByIdAction {
	constructor(private userService: UserServiceInterface) {
	}

	async execute(id: string): Promise<UserModel> {
		return await this.userService.getUserById(id);
	}
}
