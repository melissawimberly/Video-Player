import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDex_awtkg0kMM-WricObPXxSJnxYD9plo';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term: 'cara delevigne'}, (videos) => {
			this.setState({videos});
			//this.setState({videos: videos}) bc key and property are same var name
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={ this.state.videos }/>
			</div>
		); 
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));