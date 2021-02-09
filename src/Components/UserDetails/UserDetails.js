import React from 'react'
import './UserDetails.css'

class UserDetails extends React.Component {
    render () {
        return ( 
        <div className="UserDetails">
            <img src={this.props.userImgUrl} alt={this.props.userName}/>
            <h2>{this.props.userName}</h2>
        </div>
        )
    }
}

export default UserDetails;