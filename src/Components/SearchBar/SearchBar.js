import React from 'react';
import './SearchBar.css';

 class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.search = this.search.bind(this);
    }

    handleSearch(e) {
        this.setState({ term: e.target.value })
    }

    search() {
        this.props.onSearch(this.state.term)
    }
    
    

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleSearch} placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
};

export default SearchBar;