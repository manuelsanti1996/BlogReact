import React, { useState } from 'react';
import Tag from './Tag';
import { articleData } from '../../data';

const TagList = ({ tags: articleTags, onTagSelected }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const tags = [...new Set(articleData.map(article => article.tag))];

  const handleTagSelected = (tag) => {
    setSelectedTag(tag);
    onTagSelected(tag);
  };

  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag}
          tag={tag}
          active={selectedTag === tag}
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