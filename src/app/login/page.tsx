'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {UserController} from "@/infrastructure/controllers/UserController";

const userController = new UserController();

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		try {
			await userController.login(email, password);
			router.push('/');
		} catch (error) {
			setError('Invalid credentials');
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div>
					<label>Password:</label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				{error && <p>{error}</p>}
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
