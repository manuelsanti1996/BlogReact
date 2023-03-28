import React, { useState, useEffect } from "react";
import { articleData } from "../../data";
import { TAGS } from "../../Enums/tags"
import TagList from "../Tags/TagList";
import ArticleList from "./ArticleList";
import SearchInput from "./SearchInput";

const FilteredArticleList = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredArticles, setFilteredArticles] = useState(articleData);
    const [selectedTag, setSelectedTag] = useState(null);


    

    useEffect(() => {
        const filtered = articleData.filter((card) => {
            return card.title.toLowerCase().includes(searchInput);
        });
        setFilteredArticles(filtered);
    }, [searchInput]);

    useEffect(() => {
        if (selectedTag === null) {
            setFilteredArticles(articleData);
        } else {
            const filtered = articleData.filter((card) => {
                return card.tag === selectedTag;
            });
            setFilteredArticles(filtered);
        }
    }, [selectedTag]);




    return (

        <div className="ml-4">
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
             <TagList tags= {Object.values(TAGS)} onTagSelected= {setSelectedTag} />
            <ArticleList articles={filteredArticles} />
        </div>
    );
};

export default FilteredArticleList;

/*

Object.values(TAGS)=["tag1", "tag2", "tag3", "tag4"]
*/