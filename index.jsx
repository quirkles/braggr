import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import getBrag from './getBrag'

const copyBrag = brag => {
	const el = document.createElement('textarea')
  	el.value = brag
  	el.setAttribute('readonly', '')
  	el.style.position = 'absolute'
  	el.style.left = '-9999px'
  	document.body.appendChild(el)
  	el.select()
  	document.execCommand('copy')
  	document.body.removeChild(el)
}


class App extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = {
				brag: getBrag()
			}
    	this.generateBrag = this.generateBrag.bind(this)
  	}

  	generateBrag() {
		this.setState({
			brag: getBrag()
		})
	}

	render() {
		const { brag } = this.state
		return (
			<div className="App">
				<input
					type="text"
					value={brag}
					id="bragTextField"
					style={{display: 'none'}}
					onChange={() => {}}
				/>
				<div className="brag-container">
					<h1>{ brag }</h1>
				</div>
				<div>
					<div className="button" onClick={this.generateBrag} >Generate new brag</div>
				</div>
				<div>
					<div className="button" onClick={() => copyBrag(brag)} >Copy to cipboard</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}