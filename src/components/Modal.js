import React from 'react';
import { Button, InputGroup, FormControl, FormGroup, Form } from 'react-bootstrap';
import 'components/Modal.css';

const Modal = ({ joinModal, setJoinModal }) => {
	const IdPasswordchooser = () => {
		if (joinModal === 1) {
			return (
				<>
					<div className="body">
						<FormControl className="pwdInput"
							type="email"
							placeholder="put your email address"
						></FormControl>
					</div>
					<div className="footer">
						<Button onClick={() => setJoinModal(2)}>Next</Button>
						<Button onClick={() => setJoinModal(0)} id="cancelBtn">
							Cancel
						</Button>
					</div>
				</>
			);
		} else if (joinModal === 2) {
			return (
				<>
					<div className="body">
						<FormGroup className ="PasswordGroup">
							<FormControl className="pwdInput"
								as ="input"
								type="text"
								placeholder="First Name"
							></FormControl>
							<FormControl className="pwdInput"
								as ="input"
								type="text"
								placeholder="last Name"
							></FormControl>
							<FormControl className="pwdInput"
								as ="input"
								type="password"
								placeholder="set a password"
							></FormControl>
						</FormGroup>
					</div>
					<div className="footer">
						<Button onClick={() => setJoinModal(0)}>Join</Button>
						<Button onClick={() => setJoinModal(0)} id="cancelBtn">
							Cancel
						</Button>
					</div>
				</>
			);
		}
	};
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<Button onClick={() => setJoinModal(0)}>X</Button>
				</div>
				<div className="title">Join us</div>

				{IdPasswordchooser()}
			</div>
		</div>
	);
};

export default Modal;
