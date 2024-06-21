import {UserRepositoryInterface} from "@/domain/contracts/UserRepositoryInterface";
import {UserModel} from "@/domain/models/UserModel";

export class GetUserByIdAction {
	constructor(private userRepository: UserRepositoryInterface) {
	}

	async execute(id: string): Promise<UserModel> {
		return await this.userRepository.getUserById(id);
	}
}
