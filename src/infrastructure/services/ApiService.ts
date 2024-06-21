import axios, {AxiosInstance} from 'axios';
import {GetServerSidePropsContext} from 'next';
import {ApiServiceInterface} from "@/infrastructure/services/contracts/ApiServiceInterface";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class ApiService implements ApiServiceInterface {
	private axiosInstance: AxiosInstance;

	constructor(token?: string) {
		this.axiosInstance = axios.create({
			baseURL: API_URL,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	public create(context?: GetServerSidePropsContext): ApiService {
		const token = this.getTokenFromCookies(context);
		return new ApiService(token);
	}

	public async get<T>(endpoint: string, auth = true): Promise<T> {
		const response = await this.axiosInstance.get<T>(endpoint, auth ? {withCredentials: true} : {});
		return response.data;
	}

	public async post<T>(endpoint: string, data: any, auth = true): Promise<T> {
		const response = await this.axiosInstance.post<T>(endpoint, data, auth ? {withCredentials: true} : {});
		return response.data;
	}

	public async put<T>(endpoint: string, data: any, auth = true): Promise<T> {
		const response = await this.axiosInstance.put<T>(endpoint, data, auth ? {withCredentials: true} : {})
		return response.data;
	}

	public async delete<T>(endpoint: string, auth = true): Promise<T> {
		const response = await this.axiosInstance.delete<T>(endpoint, auth ? {withCredentials: true} : {})
		return response.data;
	}

	private getTokenFromCookies(context?: GetServerSidePropsContext): string | undefined {
		if (context) {
			// Server-side
			const cookies = context.req.headers.cookie;
			if (cookies) {
				const parsedCookies = cookies.split('; ').reduce((acc: { [key: string]: string }, cookie) => {
					const [name, value] = cookie.split('=');
					acc[name] = value;
					return acc;
				}, {});
				return parsedCookies['token'];
			}
		} else {
			// Client-side
			if (typeof document !== 'undefined') {
				const cookieString: string = document.cookie;
				const cookies: string[] = cookieString.split('; ');

				for (const cookie of cookies) {
					const [cookieName, cookieValue] = cookie.split('=');
					if (cookieName === 'token') {
						return cookieValue;
					}
				}
			}
		}
		return undefined;
	}
}
