import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Jumbotron from './Jumbotron'
import Footer from './Footer'

import { Provider } from 'react-redux'
import store from './../store'

class App extends Component {
	render() {		
		return (
			<Provider store={store}>
				<Header />
				<Jumbotron />
				<Footer/>
			</Provider> 
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
