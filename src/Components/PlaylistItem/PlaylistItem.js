import React from 'react';
import './PlaylistItem.css';

class PlaylistItem extends React.Component {
    render() {
        return (
            <div className="PlaylistItem">
                <div className="Item-information">
                    <h3>{this.props.item.name}</h3>
                    <p>{this.props.item.id} </p>
                </div>
            </div>
        )
    }
}

export default PlaylistItem