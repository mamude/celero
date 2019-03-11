import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle, Table, Button, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExtratos, deleteExtrato, getSaldo } from './../../actions/extratos';

export class Listar extends Component {
	static propTypes = {
		extratos: PropTypes.array.isRequired,				
		getExtratos: PropTypes.func.isRequired,	
		getSaldo: PropTypes.func.isRequired,	
		deleteExtrato: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getExtratos();
		this.props.getSaldo();		
	}

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
								<strong>Extrato diário</strong><br/>
								<Badge>Saldo: {valor}</Badge>
							</CardTitle>
							<Table bordered>
								<thead>
									<tr>
										<th>#</th>
										<th>Descrição</th>
										<th>Valor</th>
										<th>Tipo</th>
										<th>Data</th>
										<th />
									</tr>
								</thead>
								<tbody>
									{this.props.extratos.map(et => (
										<tr key={et.id}>
											<td>{et.id}</td>
											<td>{et.descricao}</td>
											<td>{et.valor}</td>
											<td>{et.tipo}</td>
											<td>{et.data}</td>
											<td>
												<Button
													color="danger"
													onClick={this.props.deleteExtrato.bind(this, et.id)}>
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

export default connect(mapStateToProps, { getExtratos, deleteExtrato, getSaldo })(Listar);
