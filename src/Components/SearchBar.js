
import React, { useState } from "react"
import { articleData } from '../data';
import CardArticle from "./CardArticle";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        articleData.filter((card) => {
            return card.title.includes(searchInput);
        });
    }

    return (
        <div className="mx-4">
            <input
                className="  text-gray-700 border rounded shadow appearance-none "
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />

            {articleData.map((card) => {
                <CardArticle
                    key={card.title}
                    title={card.title}
                    image={card.image}
                    description={card.description} />

            })}
        </div>

    )
};


export default SearchBar
