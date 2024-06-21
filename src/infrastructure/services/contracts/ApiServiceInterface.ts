import {GetServerSidePropsContext} from "next";
import {ApiService} from "@/infrastructure/services/ApiService";

export interface ApiServiceInterface {
	create(context?: GetServerSidePropsContext): ApiService;

	get(endpoint: string, auth?: boolean): Promise<any>;

	post(endpoint: string, data: any, auth?: boolean): Promise<any>;

	put(endpoint: string, data: any, auth?: boolean): Promise<any>;

	delete(endpoint: string, auth?: boolean): Promise<any>;
}
