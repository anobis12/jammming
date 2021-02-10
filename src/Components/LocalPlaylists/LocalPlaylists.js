import React from 'react';
import './LocalPlaylists.css';
import Playlists from '../Playlists/Playlists'

class LocalPlaylists extends React.Component{
    render() {
                return (
                    <div className="LocalPlaylists">
                        <h2>Saved Playlists</h2>
                        <Playlists items = {this.props.items} />
                    </div>
                )
            }
        
    
}

export default LocalPlaylists;