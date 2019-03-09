import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

class App extends Component {
	render() {		
		return <div>
			<Header />
			<Jumbotron />
			<Footer/>
		</div> 
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
