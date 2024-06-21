import {UserModel} from "@/infrastructure/models/UserModel";

export interface AuthModel {
	token: string;
	user: UserModel;
}
