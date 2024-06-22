import {GetUserByIdAction} from "@/infrastructure/actions/GetUserByIdAction";
import {LoginAction} from "@/infrastructure/actions/auth/LoginAction";
import {RegisterAction} from "@/infrastructure/actions/auth/RegisterAction";

export class UserController {
	private getUserByIdAction: GetUserByIdAction;
	private loginAction: LoginAction;
	private registerAction: RegisterAction;

	constructor() {
		this.getUserByIdAction = new GetUserByIdAction();
		this.loginAction = new LoginAction();
		this.registerAction = new RegisterAction();
	}

	async getUserById(id: string) {
		return await this.getUserByIdAction.execute(id);
	}

	async login(email: string, password: string) {
		return await this.loginAction.execute(email, password);
	}

	async register(email: string, password: string) {
		return await this.registerAction.execute(email, password);
	}
}
