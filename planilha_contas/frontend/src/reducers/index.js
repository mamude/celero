import { combineReducers } from 'redux';
import extratos from './extratos';
import auth from './auth';

export default combineReducers({
	extratos,
	auth
});
