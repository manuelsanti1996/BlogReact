import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import { articleData } from '../../data';

const TagList = ({ onTagSelected }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    onTagSelected(selectedTags);
  }, [selectedTags, onTagSelected]);

  const tags = [...new Set(articleData.map(article => article.tag))];

  const handleTagSelected = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          active={selectedTags.includes(tag)}
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