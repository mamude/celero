import { CREATE_MESSAGE, GET_ERROR } from './types';

// Mensagens de feedback para usuario
export const createMessage = (msg) => {
	return {
		type: CREATE_MESSAGE,
		payload: msg
	};
};

// Mensagens de erro para usuario
export const returnErrors = (msg, status) => {	
	return {
		type: GET_ERROR,
		payload: { msg, status }
	};
};
