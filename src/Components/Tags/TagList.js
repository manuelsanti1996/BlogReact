import React, { useState,useEffect } from 'react';
import Tag from './Tag';
import { articleData } from '../../data';

const TagList = ({ tags: articleTags, onTagSelected }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    onTagSelected(selectedTags);
  }, [selectedTags]);

  const tags = [...new Set(articleData.map(article => article.tag))];

  const handleTagSelected = (tag) => {
    const index = selectedTags.indexOf(tag);
  
    if (index === -1) {
      // Il tag non è stato selezionato, lo aggiungiamo all'array
      const newSelectedTags = [...selectedTags, tag];
      setSelectedTags(newSelectedTags);
      // Richiamiamo la funzione onTagSelected con l'array dei tag selezionati
      onTagSelected(newSelectedTags);
    } else {
      // Il tag è già stato selezionato, lo rimuoviamo dall'array
      const newSelectedTags = [...selectedTags];
      newSelectedTags.splice(index, 1);
      setSelectedTags(newSelectedTags);
      // Richiamiamo la funzione onTagSelected con l'array dei tag selezionati
      onTagSelected(newSelectedTags);
    }
  };
  

  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag}
          tag={tag}
          active={selectedTags.indexOf(tag) !== -1}
          onTagSelected={() => handleTagSelected(tag)}
        />
      ))}
    </div>
  );
};

export default TagList;





/* new Set è un oggetto JavaScript che rappresenta una collezione di valori univoci,
 dove ogni valore può comparire solo una volta.
*/