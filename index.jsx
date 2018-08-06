import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getBrag from './getBrag'


class App extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = { brag: 'Click the button to see a brag' };
    	this.generateBrag = this.generateBrag.bind(this);
  	}

  	generateBrag() {
		this.setState({ brag: getBrag() })
	}

	render() {
		const { brag } = this.state
		return (
			<div className="App">
				<div className="button" onClick={this.generateBrag} >Generate brag</div>
				<h1 className="App-Title">{ brag }</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}