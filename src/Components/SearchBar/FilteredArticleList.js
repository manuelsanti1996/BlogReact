import React, { useState, useEffect } from "react";
import { articleData } from "../../data";
import { TAGS } from "../../Enums/tags"
import TagList from "../Tags/TagList";
import ArticleList from "./ArticleList";
import SearchInput from "./SearchInput";

const FilteredArticleList = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredArticles, setFilteredArticles] = useState(articleData);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
    const filtered = articleData.filter((card) => {
        return card.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    if (selectedTags.length > 0) {
        const tagFiltered = filtered.filter((card) => {
            return selectedTags.includes(card.tag);
        });
        setFilteredArticles(tagFiltered);
    } else {
        setFilteredArticles(articleData);
    }
}, [searchInput, selectedTags]);

useEffect(() => {
    const dynamicFiltered = articleData.filter((card) => {
      return card.title.toLowerCase().includes(searchInput);
    });
    setFilteredArticles(dynamicFiltered);
  }, [searchInput]);

    return (
        <div className="ml-4">
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
            <TagList tags={Object.values(TAGS)} onTagSelected={setSelectedTags} />
            <ArticleList articles={filteredArticles} />
        </div>
    );
};

export default FilteredArticleList;


/*

Object.values(TAGS)=["tag1", "tag2", "tag3", "tag4"]
*/