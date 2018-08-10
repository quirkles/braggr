import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getBrag from './getBrag'

const copyBrag = brag => {
	const el = document.createElement('textarea');
  	el.value = brag;
  	el.setAttribute('readonly', '');
  	el.style.position = 'absolute';
  	el.style.left = '-9999px';
  	document.body.appendChild(el);
  	el.select();
  	document.execCommand('copy');
  	document.body.removeChild(el);
}


class App extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = {
			brag: getBrag(),
			canCopy: true
		};
    	this.generateBrag = this.generateBrag.bind(this);
  	}

  	generateBrag() {
		this.setState({
			brag: getBrag(),
			canCopy: true
		})
	}

	render() {
		const { brag, canCopy } = this.state
		return (
			<div className="App">
				<input
					type="text"
					value={brag}
					id="bragTextField"
					style={{display: 'none'}}
					onChange={() => {}}
				/>
				<h1>
					{ brag }
				</h1>
				<div className="button" onClick={this.generateBrag} >Generate new brag</div>
				{
					canCopy ?
						<div className="button" onClick={() => copyBrag(brag)} >Copy to cipboard</div> :
						null
				}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}