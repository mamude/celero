import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExtrato } from '../../actions/extratos';

export class Adicionar extends Component {
	state = {
		tipo: 'E',
		descricao: '',
		valor: '',
		valorFormatado: ''
	};

	static propTypes = {
		addExtrato: PropTypes.func.isRequired
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onValorChange = (values) => {
		const { formattedValue, value} = values;
		this.setState({ 'valor': value, 'valorFormatado': formattedValue })
	}
	
	onSubmit = (e) => {
		e.preventDefault();
		const { tipo, descricao, valor } = this.state;
		const extrato = { tipo, descricao, valor };
		this.props.addExtrato(extrato);
		this.setState({
			tipo: 'E',
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
								<Input type="select" name="tipo" onChange={this.onChange} value={tipo}>
									<option value="E">Entrada</option>
									<option value="S">Saída</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="descricao">Descrição</Label>
								<Input name="descricao" onChange={this.onChange} value={descricao} />
							</FormGroup>
							<FormGroup>
								<Label for="valor">Valor</Label>								
								<NumberFormat className="form-control"									
									onValueChange={this.onValorChange}
									isNumericString={true}
									value={valor}
									decimalScale={2}
									fixedDecimalScale={true}
									thousandSeparator={true} 
									prefix="R$ "/>
								<small className="form-text text-muted">Digite "." para informar os centavos.</small>								
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
