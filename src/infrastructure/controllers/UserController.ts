import {UserApi} from "@/infrastructure/api/UserApi";
import {UserRepository} from "@/infrastructure/repositories/UserRepository";
import {GetUserByIdAction} from "@/usecases/GetUserByIdAction";

const userApi = new UserApi();
const userRepository = new UserRepository(userApi);
const getUserById = new GetUserByIdAction(userRepository);

export class UserController {
	async getUser(id: string) {
		return await getUserById.execute(id);
	}
}
