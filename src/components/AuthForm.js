import { authService } from 'myFB';
import React, { useState } from 'react';
import Modal from 'components/Modal';
import { Button } from 'react-bootstrap';

const AuthForm = () => {
	const [newAccount, setNewAccount] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [joinModal, setJoinModal] = useState(0);
	//const toggleAccount = () => setNewAccount((prev) => !prev);
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
	const onJoinModal = () => {
		setJoinModal(1);
		console.log(joinModal);
	};
	const IdPasswordModal = () => {
		if (joinModal !== 0) {
			return <Modal joinModal={joinModal} setJoinModal={setJoinModal} />;
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
					value={'Log In'}
				/>
				{error && <span className="authError">{error}</span>}
			</form>
			<Button
				onClick={onJoinModal}
				style={{
					background: 'transparent',
					color: 'black',
					border: 'None',
				}}
			>
				Join
			</Button>
			{IdPasswordModal()}
		</>
	);
};

export default AuthForm;
