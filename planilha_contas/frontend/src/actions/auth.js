import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';

// verifica token de acesso e carrega informacoes do usuario logado
export const loadUser = () => (dispatch, getState) => {
	// carregar usuario
	dispatch({ type: USER_LOADING });
	
	// chamada no backend
	axios
		.get('/api/auth/user', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: AUTH_ERROR
			});
		});
};

// autenticar usuário na api backend
export const login = (username, password) => (dispatch) => {
	// headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	// request body
	const body = JSON.stringify({ username, password });

	// chamada no backend
	axios
		.post('/api/auth/login', body, config)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: LOGIN_FAIL
			});
		});
};

// efetuar logout na aplicacao
export const logout = () => (dispatch, getState) => {	
	// chamada no backend
	axios
		.post('/api/auth/logout', null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: LOGOUT_SUCCESS
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// Helper para enviar token durante as requisições da API
export const tokenConfig = getState => {
	const token = getState().auth.token;

	// headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}

	return config;
}
