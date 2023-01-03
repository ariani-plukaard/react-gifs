import React, { Component } from 'react';
import './App.scss';
import giphy from 'giphy-api';
import Gif from './components/gif.jsx'
import GifList from './components/gif_list.jsx'
import SearchBar from './components/search_bar.jsx'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifID: '4Zo41lhzKt6iZ8xff9'
    }
    // this.search('disney');
  }

  search = (query) => {
    // from giphy API documentation
    giphy('oSUvt1fPm7S6qAgt3oN8ZkL5bxQBnaRh').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // console.log(result);
      this.setState({
        gifs: result.data
      });
    });
  }

  selectedGif = (id) => {
    this.setState({
      selectedGifID: id
    });
  }

  render() {
    // const gifs = [
    //   {id: '4Zo41lhzKt6iZ8xff9'},
    //   {id: '3o7abAHdYvZdBNnGZq'},
    //   {id: '51Uiuy5QBZNkoF3b2Z'}
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar  searchFunction={this.search} />
          {/* Pass function from parent to child */}
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGifFunction={this.selectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
