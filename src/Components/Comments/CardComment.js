import React from 'react'

const CardComment = ({ name, text }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg p-5 m-3">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  )
}

export default CardComment
