import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log('submit');
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
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

export default Login;
