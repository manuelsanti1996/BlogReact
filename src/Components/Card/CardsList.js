import React from 'react';
import { articleData } from '../../data';
import CardArticle from './CardArticle';

const CardsList=()=> {
    return (
        <div className='flex flex-row p-4 overflow-x-auto'>
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
