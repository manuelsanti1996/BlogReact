import React, { useState, useMemo } from "react";
import { articleData } from "../../data";
import { TAGS } from "../../Enums";
import TagList from "../Tags/TagList";
import ArticleList from "./ArticleList";
import SearchInput from "./SearchInput";

const FilteredArticleList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredArticles = useMemo(() => {
    const filteredByTitle = articleData.filter((article) =>
      article.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (selectedTags.length > 0) {
      return filteredByTitle.filter((article) =>
        selectedTags.includes(article.tag)
      );
    }

    return filteredByTitle;
  }, [articleData, searchInput, selectedTags]);

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
useMemo ottimizza la performance evitando di ricalcolare il valore di una funzione 
ogni volta che il componente viene ri-renderizzato. Invece, calcola il valore solo 
quando le dipendenze cambiano e restituisce la versione memorizzata se le dipendenze
 rimangono le stesse.
*/