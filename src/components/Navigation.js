import React, { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { authService } from 'myFB';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
const onLogOutClick = () => {
	authService.signOut();
};
const Navigation = ({ userObj }) => (
	<Navbar bg="myRed" variant="dark" sticky="top" expand="sm">
		<Navbar.Brand>
			<FontAwesomeIcon icon={faTwitter} color="white" size="1x" />
			Cwitter
		</Navbar.Brand>
		<Navbar.Toggle />
		<Navbar.Collapse>
			<Nav>
				<NavLink
					className="nav-link"
					to="/Home"
					activeClassName="active"
				>
					Home
				</NavLink>
				<NavDropdown title="profile" id="basic-nav-dropdown">
					<NavLink
						className="nav-link"
						style={{ color: 'black' }}
						to="/profile"
					>
						{userObj.displayName
							? `${userObj.displayName}'s profile`
							: 'Profile'}
					</NavLink>
					<NavLink
						className="nav-link"
						style={{ color: 'black' }}
						to="/"
					>
						<span onClick={onLogOutClick}>Log Out</span>
					</NavLink>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default Navigation;
