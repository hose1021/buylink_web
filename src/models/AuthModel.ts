import {UserModel} from "@/models/UserModel";

export interface AuthModel {
	token: string;
	user: UserModel;
}
