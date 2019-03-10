import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Login from './Login';
import Adicionar from './extrato/Adicionar';
import Listar from './extrato/Listar';
import PrivateRouter from './common/PrivateRouter';

import { Provider } from 'react-redux';
import store from './../store';
import { loadUser } from '../actions/auth';

class App extends Component {
	componentDidMount() {
		// carregar informacao do usuario autenticado
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<Fragment>
						<Header />
						<Switch>
							<Route exact path="/" component={Jumbotron} />
							<Route exact path="/login" component={Login} />
							<PrivateRouter exact path="/adicionar" component={Adicionar} />
							<PrivateRouter exact path="/extrato" component={Listar} />
						</Switch>
						<Footer />
					</Fragment>
				</HashRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
