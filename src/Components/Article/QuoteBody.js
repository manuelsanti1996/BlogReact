import React from 'react'

const Quote = ({ text, author }) => {
    return (
        <div class="bg-gray-100 border-l-4 border-gray-500 text-gray-700 italic p-4 my-4">
            <blockquote>
                <p class="text-lg">{text}</p>
                <cite class="text-md block text-right mt-2">{author}</cite>
            </blockquote>
        </div>
    )
}

export default Quote
