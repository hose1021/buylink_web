import axios, {AxiosInstance} from 'axios';
import {GetServerSidePropsContext} from 'next';

let axiosInstance: AxiosInstance;

const createAxiosInstance = (token?: string) => {
	if (!axiosInstance) {
		axiosInstance = axios.create({
			baseURL: process.env.API_URL,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
	}

	return axiosInstance;
};

const getTokenFromCookies = (context?: GetServerSidePropsContext): string | undefined => {
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
};

const createApiService = (context?: GetServerSidePropsContext) => {
	const token = getTokenFromCookies(context);
	createAxiosInstance(token);

	return {
		get: async <T>(endpoint: string, auth = true): Promise<T> => {
			const response = await axiosInstance.get<T>(endpoint, auth ? {withCredentials: true} : {});
			return response.data;
		},

		post: async <T>(endpoint: string, data: any, auth = true): Promise<T> => {
			const response = await axiosInstance.post<T>(endpoint, data, auth ? {withCredentials: true} : {});
			return response.data;
		},

		put: async <T>(endpoint: string, data: any, auth = true): Promise<T> => {
			const response = await axiosInstance.put<T>(endpoint, data, auth ? {withCredentials: true} : {});
			return response.data;
		},

		delete: async <T>(endpoint: string, auth = true): Promise<T> => {
			const response = await axiosInstance.delete<T>(endpoint, auth ? {withCredentials: true} : {});
			return response.data;
		},
	};
};

const api = createApiService();

export default api;
