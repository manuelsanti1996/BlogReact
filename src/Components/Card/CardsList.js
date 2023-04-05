import React from 'react';
import CardArticle from './CardArticle';

const CardsList = ({ style = 'flex flex-row p-4 overflow-x-auto', data }) => {
    return (
      typeof data !== "undefined" && data.length > 0
      ? <div className={style}>
          {data.map((card, index) => (
            <CardArticle
              key={index}
              id={card?.id}
              title={card?.title}
              image={card?.image}
              description={card?.description}
            />
          ))}
        </div>
      : null
    );
  };

export default CardsList;
