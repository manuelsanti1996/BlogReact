import React from "react";
import CardArticle from "../CardArticle";

const ArticleList = ({ articles }) => {
    return (
        <div className="flex flex-wrap">
            {articles.map((card) => (
                <CardArticle
                    key={card.title}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default ArticleList;