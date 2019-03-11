import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

export class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username, this.state.password);
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		if(this.props.isAuthenticated) {
			return <Redirect to="/"/>
		}

		const { username, password } = this.state;
		return (
			<div className="col-md-6 pt-5 m-auto">
				<Card>
					<CardBody>
						<CardTitle>Autenticação</CardTitle>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="username">Email</Label>
								<Input type="username" name="username" onChange={this.onChange} value={username} />
							</FormGroup>
							<FormGroup>
								<Label for="password">Senha</Label>
								<Input type="password" name="password" onChange={this.onChange} value={password} />
							</FormGroup>
							<Button color="primary">Autenticar</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
