import { authService } from 'myFB';
import React, { useState } from 'react';

const AuthForm = () => {
	const [newAccount, setNewAccount] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const toggleAccount = () => setNewAccount((prev) => !prev);
	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};
	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			let data;
			if (newAccount) {
				data = await authService.createUserWithEmailAndPassword(
					email,
					password,
				);
			} else {
				data = await authService.signInWithEmailAndPassword(
					email,
					password,
				);
			}
		} catch (error) {
			setError(error.message);
		}
	};
	return (
		<>
			<form onSubmit={onSubmit} className="container">
				<input
					name="email"
					type="email"
					placeholder="Email"
					required
					value={email}
					onChange={onChange}
					className="authInput"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
					required={password}
					onChange={onChange}
					className="authInput"
				/>
				<input
					type="submit"
					className="authInput authSubmit"
					value={newAccount ? 'Create Account' : 'Log In'}
				/>
				{error && <span className="authError">{error}</span>}
			</form>
			<span onClick={toggleAccount} className="authSwitch">
				{newAccount ? 'Sign in' : 'Create Account'}
			</span>
		</>
	);
};

export default AuthForm;
