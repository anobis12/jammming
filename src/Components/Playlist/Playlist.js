import React from 'react';
import './Playlist.css'

import TrackList from '../TrackList/TrackList'


 class Playlist extends React.Component {
     constructor(props){
         super(props);
         this.handleNameChange=this.handleNameChange.bind(this);
     }

    handleNameChange(e){
        this.props.onUpdateName(e.target.value)
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.name} 
                        placeholder= 'Playlist Name'
                       onChange={this.handleNameChange}/>

                <TrackList tracks={this.props.playlistTracks} remove={this.props.remove} isRemoval={true}/>
                <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;