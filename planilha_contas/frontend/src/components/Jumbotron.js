import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Jumbotron extends Component {
	goLoginPage() {
		window.location.href = '/#/login';
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">PyBank</h1>
					<p className="lead">Como controlar seus gastos e ganhos.</p>
					<hr className="my-4" />
					<p>Aplicação de exemplo desenvolvida com Django, Django Rest Framework e React.</p>
					<Button color="warning" onClick={this.goLoginPage}>
						Acessar
					</Button>
				</div>
			</div>
		);
	}
}

export default Jumbotron;
