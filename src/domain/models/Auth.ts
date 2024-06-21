import {UserModel} from "@/domain/models/UserModel";

export interface AuthModel {
	token: string;
	user: UserModel;
}
