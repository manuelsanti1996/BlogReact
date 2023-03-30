import React from 'react'

const CardComment = ({name,comment}) => {
  return (
    <div className="flex items-center space-x-4 p-5 m-3 bg-slate-300 border border-gray-200 rounded-xl">
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-gray-600 text-sm">{comment}</p>
      
    </div>
  </div>
);
};


export default CardComment
