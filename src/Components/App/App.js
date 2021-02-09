import React from 'react'
import './App.css';

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'


 class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { searchResults: [],
                   playlistName: '',
                   playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatesPlaylistName = this.updatesPlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.some(savedTrack => savedTrack.id === track.id)) {
      return;
    }    
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let index = tracks.indexOf(track);
    tracks.splice(index,1)
    this.setState({playlistTracks:tracks})
  }

  updatesPlaylistName(input) {
    this.setState({playlistName: input})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then (() => {
      this.setState ({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
    document.querySelectorAll('input')[1].value = '';
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }

  componentDidMount() {
    window.addEventListener('load', () => {Spotify.getAccessToken()});
  }

  render (){
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/> 
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} 
                       onAdd={this.addTrack}/>
        <Playlist  name={this.state.playlistName} 
                   playlistTracks={this.state.playlistTracks} 
                   remove={this.removeTrack}
                   onUpdateName={this.updatesPlaylistName}
                   onSave={this.savePlaylist}/>
      </div>
    </div>
  </div>
    );
  }
}
export default App;
