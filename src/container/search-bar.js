import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {fetchWeather} from '../actions/index'


class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={
			term:"",
		}

this.onInputChange = this.onInputChange.bind(this)
this.onFormSubmit = this.onFormSubmit.bind(this)
	


	}

	onInputChange(event){
		this.setState({
			term:event.target.value,
		})


	}

	onFormSubmit (event){	

	event.preventDefault();

	if(!this.state.term){
		this.setState({term:''})
	}

else{
	this.props.fetchWeather(this.state.term)
	this.setState({term:''})

	}	

	}

	render(){
		
		return(
			<div className="search-container"> 
				<form onSubmit={this.onFormSubmit} className="input-group">

					<input placeholder="Get Current forecast " className="form-control" value={this.state.term} onChange={this.onInputChange} 	/>
					<span className="input-group-btn">
						<button type="submit"className="fa fa-search"> Search </button>
					</span>

				</form>
				</div>

			)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {fetchWeather }, dispatch)

}

export default connect(null, mapDispatchToProps)(SearchBar);