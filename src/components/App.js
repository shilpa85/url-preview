import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';
import './App.css';


class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {urlPreview: {}, customURL: ""};
		
	}
	
	 searchHandler = async (val) => {

		const apiKey = 'b333eeefabf6ef71662323a74d86a643';

		if( val === '' ){
			this.setState({urlPreview : {} });
		} else if( val.split(".").length > 2){
			const response = await axios.get(`http://api.linkpreview.net/?key=${apiKey}&q=${val}`);		
			this.setState({urlPreview : response.data});
			const urlArr = response.data.url.split("www.");
			if(urlArr.length > 1){
				this.setState({customURL : urlArr[1].replace("/", "")});
			}
		}
		
	}
 
	render(){
	  return (
		<div className="urlPreview">
		  <SearchBar callback={this.searchHandler} />
		  	{Object.keys(this.state.urlPreview).length > 0 &&
				<a href={this.state.urlPreview.url} target="_blank">
					<div className="urlPreview__container">
						<div className="urlPreview__image">
							<img src= {this.state.urlPreview.image} alt={this.state.urlPreview.title} />
						</div>
						<div className="urlPreview__details">
							<h3>{this.state.urlPreview.title}</h3> 
							<p>{this.state.urlPreview.description}</p>
							<span className="urlPreview__details__url">{this.state.customURL}</span>
						</div>
					</div>
				</a> 
			}
		</div>
		  
	  );
	}
}

export default App;
