import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle, Table, Button, Badge, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExtratos, getExtratosOrdenado, deleteExtrato, getSaldo } from './../../actions/extratos';

export class Listar extends Component {
	state = {
		ordernar_descricao: 'ASC',
		ordernar_valor: 'ASC'
	};

	static propTypes = {
		extratos: PropTypes.array.isRequired,
		getExtratos: PropTypes.func.isRequired,
		getExtratosOrdenado: PropTypes.func.isRequired,
		getSaldo: PropTypes.func.isRequired,
		deleteExtrato: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getExtratos();
		this.props.getSaldo();
	}

	atualizar = () => {
		this.props.getExtratos();
		this.props.getSaldo();
	};

	orderByDescricao = (e) => {
		e.preventDefault();
		const { ordernar_descricao } = this.state;
		if (ordernar_descricao == 'ASC') {
			this.setState({ ordernar_descricao: 'DESC' });
			this.props.getExtratosOrdenado('descricao=DESC');
		}
		if (ordernar_descricao == 'DESC') {
			this.setState({ ordernar_descricao: 'ASC' });
			this.props.getExtratosOrdenado('descricao=ASC');
		}
	};

	orderByValor = (e) => {
		e.preventDefault();
		const { ordernar_valor } = this.state;
		if (ordernar_valor == 'ASC') {
			this.setState({ ordernar_valor: 'DESC' });
			this.props.getExtratosOrdenado('valor=DESC');
		}
		if (ordernar_valor == 'DESC') {
			this.setState({ ordernar_valor: 'ASC' });
			this.props.getExtratosOrdenado('valor=ASC');
		}
	};

	render() {
		const { saldo } = this.props;
		var valor = '';
		if (saldo !== undefined) {
			valor = saldo.saldo;
		}
		return (
			<Fragment>
				<div className="col-md-10 pt-5 m-auto">
					<Card>
						<CardBody>
							<CardTitle>
								<Row>
									<Col xs="6">
										<strong>Extrato diário</strong>
										<br />
										<Badge>Saldo: {valor}</Badge>
									</Col>
									<Col xs="6">
										<Button color="primary" className="float-right" onClick={this.atualizar}>
											Atualizar
										</Button>
									</Col>
								</Row>
							</CardTitle>
							<Table bordered>
								<thead>
									<tr>
										<th>#</th>
										<th onClick={this.orderByDescricao}>
											<u style={{cursor:'pointer'}}>Descrição</u>
										</th>
										<th onClick={this.orderByValor}>
											<u style={{cursor:'pointer'}}>Valor</u>
										</th>
										<th>Tipo</th>
										<th>Data</th>
										<th />
									</tr>
								</thead>
								<tbody>
									{this.props.extratos.map((et) => (
										<tr key={et.id}>
											<td>{et.id}</td>
											<td>{et.descricao}</td>
											<td>{et.valor}</td>
											<td>{et.tipo}</td>
											<td>{et.data}</td>
											<td>
												<Button
													color="danger"
													onClick={this.props.deleteExtrato.bind(this, et.id)}
												>
													Apagar
												</Button>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	extratos: state.extratos.extratos,
	saldo: state.extratos.saldo
});

export default connect(mapStateToProps, { getExtratos, getExtratosOrdenado, deleteExtrato, getSaldo })(Listar);
