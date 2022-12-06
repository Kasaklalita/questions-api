import React from "react";
import pythonLogo from "../../assets/python-logo.svg";
import djangoLogo from "../../assets/django-logo.svg";

const MainNavbar = () => {
	return (
		<nav className="navbar has-background-dark">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src={pythonLogo} className="image is-32x32" />
				</a>
				<a className="navbar-item" href="https://bulma.io">
					<img src={djangoLogo} className="image is-32x32" />
				</a>
			</div>
			<div className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item">
						<div className="buttons">
							<a className="button is-primary">Sign Up</a>
							<a className="button bd-tw-button">Log In</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MainNavbar;
