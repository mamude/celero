import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

// verifica token de acesso e carrega informacoes do usuario logado
export const loadUser = () => (dispatch, getState) => {
	// carregar usuario
	dispatch({ type: USER_LOADING });

	// obter usuario do localStorage
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

	// chamada no backend
	axios
		.get('/api/auth/user', config)
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
