import {GetUserByIdAction} from "@/infrastructure/actions/GetUserByIdAction";
import {LoginAction} from "@/infrastructure/actions/LoginAction";

let getUserByIdAction: GetUserByIdAction;
let loginAction: LoginAction;

export class UserController {
	async getUserById(id: string) {
		return await getUserByIdAction.execute(id);
	}

	async login(email: string, password: string) {
		return await loginAction.execute(email, password);
	}
}
