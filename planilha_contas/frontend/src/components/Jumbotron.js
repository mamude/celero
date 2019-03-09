import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getExtratos } from '../actions/extratos'

export class Jumbotron extends Component {

	static propTypes = {
		extratos: PropTypes.array.isRequired
	}

	goLoginPage() {		
		window.location.href='/login'
	}

	componentDidMount() {
		this.props.getExtratos();
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">PyBank</h1>
					<p className="lead">Como controlar seus gastos e ganhos.</p>
					<hr className="my-4" />
					<p>Aplicação de exemplo desenvolvida com Django, Django Rest Framework e React.</p>
					<Button color="primary" onClick={this.goLoginPage}>Acessar</Button>										
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	extratos: state.extratos.extratos
})

export default connect(mapStateToProps, { getExtratos })(Jumbotron)
