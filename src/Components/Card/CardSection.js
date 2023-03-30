import React from 'react';
import PropTypes from 'prop-types';

const CardSection = (props) => {
  const { style, title, text } = props;

  return (
    <div  style={style}>
      <h1 className="  font-bold text-2xl">{title}</h1>
      <p className='pt-4'>{text}</p>
    </div>
  );
  
};

CardSection.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default CardSection;

