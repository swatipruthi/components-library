import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.scss"
import {
	Nav,
	NavItem,
	NavLink,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu
} from "reactstrap"

class App extends Component {
	state = {
		value: "",
		dropdownOpen: false
	}

	onChange = e => {
		this.setState({ value: e.target.value })
	}

	toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

	renderSearchInput() {
		return (
			<div>
				<input
					type='search'
					value={this.state.value}
					placeholder='Search here...'
					onChange={this.onChange}
				/>
				<span style={{ right: "30px", position: "relative", color: "black" }}>
					<i className='fa fa-search'></i>
				</span>
			</div>
		)
	}

	renderMultiLevelDropdown() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle caret>Dropdown</DropdownToggle>
				<DropdownMenu>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	render() {
		return (
			<div className='Container'>
				<div className='App-body'>
					<header className='Heading'>Components Library</header>
					<Nav vertical>
						<div className='p-5'>{this.renderSearchInput()}</div>
						{this.renderMultiLevelDropdown()}
						<hr />
					</Nav>
				</div>
			</div>
		)
	}
}

export default App
