import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="#">
					<img
						className="logo"
						src={require('../img/logo.png')}
						width="150"
						height="100%"
						alt="PyBank by samirmamude"
					/>
				</a>				
			</nav>
		);
	}
}
