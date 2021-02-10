import React from 'react'
import './Playlists.css'
import PlaylistItem from '../PlaylistItem/PlaylistItem'


class Playlists extends React.Component{
    render() {
        return (
            <div className="Playlists">
                {this.props.items.map(playlist=>{
                    return <PlaylistItem item={playlist}/>
                })}
            </div>
        )
    }
}

export default Playlists