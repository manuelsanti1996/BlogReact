import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { TAGS } from "../../Enums";
import TagList from "../Tags/TagList";
import SearchInput from "./SearchInput";
import CardsList from "../Card/CardsList";

const FilteredArticleList = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredArticles = useMemo(() => {
    const filteredByTitle = data?.filter((article) =>
      article.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (selectedTags.length > 0) {
      return filteredByTitle.filter((article) =>
        selectedTags.includes(article.tag)
      );
    }

    return filteredByTitle;
  }, [data, searchInput, selectedTags]);

  return (

    <div className="ml-4">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <TagList tags={Object.values(TAGS)} onTagSelected={setSelectedTags} />
      <Link to={"/createarticle"} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md my-4 inline-block">
        Aggiungi Articolo
      </Link>

      <CardsList style="flex flex-wrap " data={filteredArticles} />
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