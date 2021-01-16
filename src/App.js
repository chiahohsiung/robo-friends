import React, { Component }from "react"
import CardList from './CardList';
import SearchBox from './SearchBox'
import './App.css'

// PROP static
// STATE dynamic
// parent   child
// state -> prop

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		// change the state of App
		// change state.searchfield
		this.setState({ searchfield: event.target.value })
		// change state.robots
		
		// console.log(filteredRobots);
	}

	componentDidMount() {
		console.log('Did')
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }))
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return <h1>LOADING</h1>
		}
		else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
		
	}
}

export default App;