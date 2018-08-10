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

const backgroundClasses = [
	{
		className: 'bg-unicorn',
		displayText: 'Unicorns'
	},
	{
		className: 'bg-space',
		displayText: 'Space'
	},
	{
		className: 'bg-smiley',
		displayText: 'Smileys'
	},
]

class App extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = {
				brag: getBrag(),
				selectedBackgroundClass: backgroundClasses[0]
			}
    	this.generateBrag = this.generateBrag.bind(this)
	}

	generateBrag() {
		this.setState({
			brag: getBrag()
		})
	}

  setBackgroundClass(backGroundClass) {
    this.setState({
      selectedBackgroundClass: backGroundClass
    })
  }

	render() {
		const { brag, selectedBackgroundClass } = this.state
		return (
			<div className={`App ${selectedBackgroundClass.className}`}>
				<div className="app-container ">
					<input
						type="text"
						value={brag}
						id="bragTextField"
						style={{display: 'none'}}
						onChange={() => {}}
					/>
					<div className="bg-selectors">
						{backgroundClasses.map(backGroundClass =>
							<div
								className={selectedBackgroundClass.className === backGroundClass.className ? 'selected' : ''}
								onClick={() => this.setBackgroundClass(backGroundClass)}
							>
								{backGroundClass.displayText}
							</div>
						)}
					</div>
					<div className="brag-container">
						<h1>{ brag }</h1>
					</div>
					<div>
						<div className="button" onClick={this.generateBrag} >Generate new brag</div>
					</div>
					<div>
						<div className="button" onClick={() => copyBrag(brag)} >Copy to clipboard</div>
					</div>
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
