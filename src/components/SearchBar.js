import React, { useState } from 'react'
import { useStyles } from "../globalStyles";

function SearchBar() {
    const classes = useStyles();
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const handleSearchFormSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.searchQuery.value)
    }
    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    return (
        <form onSubmit={handleSearchFormSubmit} className={classes.searchBarContainer}>
            <input className={classes.searchInput} type="text" name='searchQuery' placeholder="See you financial report"
                value={query}
                onChange={handleQueryChange} />
            <input type="submit" hidden />
            <span>{">"}</span>
        </form>
    )
}

export default SearchBar
