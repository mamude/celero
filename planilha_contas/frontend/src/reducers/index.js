import { combineReducers } from 'redux';
import extratos from './extratos';
import auth from './auth';
import errors from './errors'
import messages from './messages';

export default combineReducers({
	errors,
	messages,
	extratos,
	auth
});
