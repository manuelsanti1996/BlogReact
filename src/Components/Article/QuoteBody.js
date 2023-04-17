import React from 'react'

const Quote = ({ text, author }) => {
    return (
        <div className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 italic p-4 my-4">
            <blockquote>
                <p className="text-lg">{text}</p>
                <cite className="text-md block text-right mt-2">{author}</cite>
            </blockquote>
        </div>
    )
}

export default Quote
