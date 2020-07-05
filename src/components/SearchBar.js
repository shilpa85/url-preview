import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{

	constructor(props){
		super(props);
		
		this.state = {searchURL: ""};
	}
	
	onChangeHandler =(event) =>{

        this.setState({searchURL: event.target.value});
        this.props.callback(event.target.value);
	}
	
	submitHandler = (event) => {
        event.preventDefault();
        this.props.callback(event.target.value);
	}
	
	render(){
		return (
		<form onSubmit={this.submitHandler} >
			<div className="searchBar__form form-control">
                <input 
                placeholder = "Search URL"
                onChange = {this.onChangeHandler} 
                value= {this.state.searchURL} id="txtSearch" 
                aria-label="Search ULR"
                />		
			</div>
		</form>
		);
		
		
	}
}

export default SearchBar;

