import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">PyBank</h1>
					<p className="lead">Como controlar seus gastos e ganhos.</p>
					<hr className="my-4" />
					<p>Aplicação de exemplo desenvolvida com Django, Django Rest Framework e React.</p>
					<Button color="primary">Acessar</Button>										
				</div>
			</div>
		);
	}
}
