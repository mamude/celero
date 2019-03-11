import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExtrato } from '../../actions/extratos';

export class Adicionar extends Component {
	state = {
		tipo: '',
		descricao: '',
		valor: ''
	};

	static propTypes = {
		addExtrato: PropTypes.func.isRequired
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		const { tipo, descricao, valor } = this.state;
		const extrato = { tipo, descricao, valor };
		this.props.addExtrato(extrato);
		this.setState({
			tipo: '',
			descricao: '',
			valor: ''
		});
	};

	render() {
		const { tipo, descricao, valor } = this.state;
		return (
			<div className="col-md-6 pt-5 m-auto">
				<Card>
					<CardBody>
						<CardTitle>Adicionar Movimentação</CardTitle>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="tipo">Tipo Movimentação</Label>
								<Input name="tipo" onChange={this.onChange} value={tipo} />
							</FormGroup>
							<FormGroup>
								<Label for="descricao">Descrição</Label>
								<Input name="descricao" onChange={this.onChange} value={descricao} />
							</FormGroup>
							<FormGroup>
								<Label for="valor">Valor</Label>
								<Input name="valor" onChange={this.onChange} value={valor} />
							</FormGroup>
							<Button color="primary">Enviar</Button>
						</Form>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default connect(null, { addExtrato })(Adicionar);
