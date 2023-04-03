import React from 'react';
import { articleData } from '../../data';
import CardArticle from './CardArticle';

const CardsList = ({ style = 'flex flex-row p-4 overflow-x-auto', data = articleData }) => {

    return (
        <div className={style}>
            {data.map((card, index) => (
                <CardArticle
                    key={index}
                    id={card.id}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
            ))}
        </div>
    );
}

export default CardsList;
