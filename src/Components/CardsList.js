import React from 'react';
import { articleData } from '../data';
import CardArticle from './CardArticle';

function CardsList() {
    return (
        <div className='flex flex-row overflow-x-auto'>
            {articleData.map(card => (
                <CardArticle
                    key={card.title}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
            ))}
        </div>
    );
}

export default CardsList;
