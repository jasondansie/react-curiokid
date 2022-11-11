import React from 'react';
import './Search.css'

const Search = (props) => {
    return (
        <div className='search'>
            <input type="search" placeholder="Name, Author, Category..." id="searchBook" onChange = {props.searchHandler}/>
            <label htmlFor="searchBook">Search</label>
        </div>
    );
};

export default Search;