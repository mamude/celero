import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
	render() {
		return (
			<div>
				<Navbar color="primary" dark expand="md">
					<div className="container">
						<NavbarBrand href="/">
							<img
								className="logo"
								src={require('../img/logo.png')}
								width="150"
								height="100%"
								alt="PyBank by samirmamude"
							/>
						</NavbarBrand>
						<Collapse navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/#/adicionar">Adicionar</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/#/extrato">Listar</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}
