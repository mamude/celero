import { GET_EXTRATOS, DELETE_EXTRATO, GET_SALDO, GET_EXTRATOS_ORDER } from '../actions/types.js';
import { ADD_EXTRATO } from './../actions/types';

const initialState = {
	extratos: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_EXTRATOS:
		case GET_EXTRATOS_ORDER:	
			return {
				...state,
				extratos: action.payload
			};
		case GET_SALDO:
			return {
				...state,
				saldo: action.payload
			};
		case ADD_EXTRATO:
			return {
				...state,
				extratos: [...state.extratos, action.payload]
			}
		case DELETE_EXTRATO:
			return {
				...state,
				extratos: state.extratos.filter(extrato => extrato.id !== action.payload)
			}
		default:
			return state;
	}
}
