import React, { Component } from 'react'

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
				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Início
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Adicionar Movimento
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Extrato
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
