import React, { useState } from "react"
import { articleData } from '../data';
import CardArticle from "./CardArticle";



const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredArticles, setFilteredArticles] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value.toLowerCase(); // converti in minuscolo
        setSearchInput(input);
        const filtered = articleData.filter((card) => {
            return card.title.toLowerCase().includes(input); // converte in minuscolo e confronta
        });
        setFilteredArticles(filtered);
    };


    const articlesToDisplay = searchInput.length > 0 ? filteredArticles : articleData;

    return (
        <div className="ml-4">
            <input
                className="text-gray-700 border rounded shadow appearance-none"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
            />

            {searchInput.length > 0 && (
                <div className="flex flex-wrap">
                    {articlesToDisplay.map((card) => (
                        <CardArticle
                            key={card.title}
                            title={card.title}
                            image={card.image}
                            description={card.description}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};
export default SearchBar
