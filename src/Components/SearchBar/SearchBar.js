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
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term)
        console.log('click')
    }

    handleSearch(e) {
        this.setState({ term: e.target.value })
    }
    handleKeyDown(e) {
        if (e.key === 'Enter'){
        this.props.onSearch(this.state.term)
        }
        console.log('enter')
    }
    
    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.handleSearch} 
                       placeholder="Enter A Song, Album, or Artist" 
                       onKeyDown={this.handleKeyDown}/>

                <button onClick={this.search}
                        className="SearchButton">SEARCH</button>
            </div>
        )
    }
};

export default SearchBar;