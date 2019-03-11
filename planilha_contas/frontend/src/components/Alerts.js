import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired      
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        // exibir mensagens de erro
        if(error !== prevProps.error) {
            if(error.msg.tipo) alert.error(`Tipo: ${error.msg.tipo.join()}`)
            if(error.msg.descricao) alert.error(`Descrição: ${error.msg.descricao.join()}`)
            if(error.msg.valor) alert.error(`Valor: ${error.msg.valor.join()}`)
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join())
        }

        // exibir mensagens de sucesso
        if (message !== prevProps.message) {
            if(message.addExtrato) alert.success(message.addExtrato)
            if(message.deleteExtrato) alert.success(message.deleteExtrato)
        }
    }

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert(Alerts))
