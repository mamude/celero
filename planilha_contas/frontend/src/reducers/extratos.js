import { GET_EXTRATOS, DELETE_EXTRATO } from '../actions/types.js';
import { ADD_EXTRATO } from './../actions/types';

const initialState = {
	extratos: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_EXTRATOS:
			return {
				...state,
				extratos: action.payload
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
