import React from "react";

const SearchInput = ({ searchInput, setSearchInput }) => {

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input);
    };

    return (
        <input
            className="text-gray-700 border rounded shadow appearance-none"
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
        />
    );
};

export default SearchInput;

/* 
in this file I passed the status regarding FilteredArticleList as props,
I detached from the main file to be able to use the search bar at a later time
*/
