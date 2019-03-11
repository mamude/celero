import axios from 'axios';
import { GET_EXTRATOS, ADD_EXTRATO, DELETE_EXTRATO } from './types';
import { tokenConfig } from './auth';
import { returnErrors, createMessage } from './messages';

// Recuperar Extratos via Rest API
export const getExtratos = () => (dispatch, getState) => {
	axios
		.get('/api/extrato/', tokenConfig(getState))
		.then((response) => {
			dispatch({
				type: GET_EXTRATOS,
				payload: response.data
			});
		})
		.catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Adicionar nova Movimentação
export const addExtrato = extrato => (dispatch, getState) => {
	axios
		.post('/api/extrato/', extrato, tokenConfig(getState))
		.then((response) => {
			dispatch(createMessage({ addExtrato: "Movimentação adicionada com sucesso!" }))
			dispatch({
				type: ADD_EXTRATO,
				payload: response.data
			});
		})
		.catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// Excluir Movimentação
export const deleteExtrato = id => (dispatch, getState) => {
	axios
		.delete(`/api/extrato/${id}/`, extrato, tokenConfig(getState))
		.then((response) => {
			dispatch(createMessage({ deleteExtrato: "Movimentação excluída com sucesso!" }))
			dispatch({
				type: DELETE_EXTRATO,
				payload: response.data
			});
		})
		.catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};