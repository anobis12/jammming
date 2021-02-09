import React from 'react';
import './SearchBar.css';

 class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term)
    }

    handleSearch(e) {
        this.setState({ term: e.target.value })
    }
    
    
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleSearch} placeholder="Enter A Song, Album, or Artist" />
                <button onClick={this.search}className="SearchButton">SEARCH</button>
            </div>
        )
    }
};

export default SearchBar;