import React from 'react';
import Tag from './Tag';
import { articleData } from '../../data';

const TagList = ({ tags: articleTags, onTagSelected }) => {
  console.log("TIPO VARIABILE: ", typeof articleTags);

  const tags = [...new Set(articleData.map(article => article.tag))];

  return (
    <div>

      {tags.map((tag) => (
        <Tag key={tag}
          tag={tag}
          onTagSelected={onTagSelected}
        />
      ))}
    </div>
  );
};

export default TagList;


/* new Set è un oggetto JavaScript che rappresenta una collezione di valori univoci,
 dove ogni valore può comparire solo una volta.

articleData.map(article => article.tag) crea un nuovo array che contiene solo i valori dell'attributo "tag" 
per ogni oggetto all'interno dell'array articleData.*/