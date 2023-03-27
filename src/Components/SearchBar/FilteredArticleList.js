import React, { useState } from "react";
import { articleData } from "../../data";
import ArticleList from "./ArticleList";
import SearchInput from "./SearchInput";

const FilteredArticleList = () => {


    const [searchInput, setSearchInput] = useState("");

    const filteredArticles = articleData.filter((card) => {
        return card.title.toLowerCase().includes(searchInput);
    });

    return (

        <div className="ml-4">
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
            {searchInput.length > 0 && <ArticleList articles={filteredArticles} />}
        </div>
    );
};

export default FilteredArticleList;

/*
the FilteredArticleList component shows a list of articles 
filtered based on the user's search and uses the SearchInput
component to allow the user to search for articles in the list.
*/