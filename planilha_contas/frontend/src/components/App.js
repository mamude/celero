import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import { Provider } from 'react-redux';
import AlertTemplate from 'react-alert-template-basic';

import Header from './Header';
import Alerts from './Alerts';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Login from './Login';
import Adicionar from './extrato/Adicionar';
import Listar from './extrato/Listar';
import PrivateRouter from './common/PrivateRouter';

import store from './../store';
import { loadUser } from '../actions/auth';

const alertOptions = {
	timeout: 3000,
	position: 'top center'
};

class App extends Component {
	componentDidMount() {
		// carregar informacao do usuario autenticado
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<HashRouter>
						<Fragment>
							<Header />
							<Alerts />
							<Switch>
								<Route exact path="/" component={Jumbotron} />
								<Route exact path="/login" component={Login} />
								<PrivateRouter exact path="/adicionar" component={Adicionar} />
								<PrivateRouter exact path="/extrato" component={Listar} />
							</Switch>
							<Footer />
						</Fragment>
					</HashRouter>
				</AlertProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
