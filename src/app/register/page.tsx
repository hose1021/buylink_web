'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {UserController} from "@/infrastructure/controllers/UserController";

const userController = new UserController();

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		console.log(userController)
		try {
			try {
				await userController.register(email, password);
			} catch (error) {
				console.error(error)
			}
			// router.push('/');
		} catch (error) {
			setError('Invalid credentials');
		}
	};

	return (
		<div>
			<h1>Register</h1>
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
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterPage;
