import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavItem, NavLink, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './../actions/auth';

export class Header extends Component {
	static propTypes = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired
	};

	goLogin = () => {				
		window.location.href="/#/login";
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<Nav className="ml-auto" navbar>
				<span className="navbar-text mr-3">
					<strong>
						{ user ? `Bem vindo, ${user.username}` : ''}
					</strong>
				</span>
				<NavItem>
					<NavLink href="/#/adicionar">Adicionar</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/#/extrato">Listar</NavLink>
				</NavItem>
				<NavItem>
					<Button color="warning" onClick={this.props.logout}>Sair</Button>
				</NavItem>				
			</Nav>
		);
		const guestLinks = (
			<Nav className="ml-auto" navbar>
				<NavItem>
					<Button color="warning" onClick={this.goLogin}>
						Acessar
					</Button>
				</NavItem>
			</Nav>
		);
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
						<Collapse navbar />
						{ isAuthenticated ? authLinks : guestLinks}
					</div>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
