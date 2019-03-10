import { GET_EXTRATOS } from '../actions/types.js';

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
		default:
			return state;
	}
}
