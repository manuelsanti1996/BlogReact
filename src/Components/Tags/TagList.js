import React from 'react';
import Tag from './Tag';

const TagList = ({ tags, onTagSelected }) => {
  return (
    <div>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} onTagSelected={onTagSelected} />
      ))}
    </div>
  );
};

export default TagList;

