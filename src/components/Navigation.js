import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ userObj }) => (
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-blue">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<FontAwesomeIcon
						icon={faTwitter}
						color={'#04AAFF'}
						size="1x"
					/>
					Cwitter
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/profile" className="nav-link" href="#">
								{userObj.displayName
									? `${userObj.displayName}'s Profile`
									: 'Profile'}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</>
);

export default Navigation;
